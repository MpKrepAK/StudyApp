package mpkrepak.studyapp.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@RestController
@RequiredArgsConstructor
public class FileController {
    @Value("${images_path}")
    private String imagesPath;
    @Value("${images_path}")
    private String videosPath;
    @Value("${images_path}")
    private String filesPath;

    private final ResourceLoader resourceLoader;

    @GetMapping("/images/{filename}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) {
        File file = new File(imagesPath + "/" + filename);

        if (!file.exists()) {
            boolean created = file.mkdirs();
            if (!created) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        }

        Resource resource = new FileSystemResource(file);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + file.getName());

        return ResponseEntity.ok()
                .headers(headers)
                .body(resource);
    }
    @GetMapping("/files/{filename}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        File file = new File(filesPath + "/" + filename);

        if (!file.exists()) {
            boolean created = file.mkdirs();
            if (!created) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        }

        // Загружаем файл как ресурс
        Resource resource = new FileSystemResource(file);

        // Определяем MIME-тип файла
        String contentType;
        try {
            contentType = Files.probeContentType(file.toPath());
        } catch (IOException e) {
            contentType = "application/octet-stream"; // Устанавливаем тип по умолчанию
        }

        // Настраиваем заголовки
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"");
        headers.add(HttpHeaders.CONTENT_TYPE, contentType);
        headers.add(HttpHeaders.CONTENT_LENGTH, String.valueOf(file.length()));

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType(contentType))
                .body(resource);
//        File file = new File(filesPath + "/" + filename);
//
//        if (!file.exists()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//
//        Resource resource = new FileSystemResource(file);
//        HttpHeaders headers = new HttpHeaders();
//        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + file.getName());
//
//        return ResponseEntity.ok()
//                .headers(headers)
//                .body(resource);
    }

    @GetMapping("/videos/{filename}")
    public ResponseEntity<Resource> getVideo(@PathVariable String filename) {
        File file = new File(videosPath + "/" + filename);
        if (!file.exists()) {
            boolean created = file.mkdirs();
            if (!created) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        }
        return ResponseEntity.ok(resourceLoader.getResource("file:" + videosPath + "/" + filename));
    }
}
