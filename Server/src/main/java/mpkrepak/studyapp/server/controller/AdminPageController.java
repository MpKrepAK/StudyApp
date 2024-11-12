package mpkrepak.studyapp.server.controller;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping("/api/admin/page")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AdminPageController {
    @Value("${images_path}")
    private String imagesPath;
    @Value("${images_path}")
    private String videosPath;
    @Value("${images_path}")
    private String filesPath;

//    @PostMapping
//    public ResponseEntity<String> addData(
//            @RequestParam("title") String title,
//            @RequestParam("subjectId") Long subjectId,
//            @RequestParam("groupId") Long groupId,
//            @RequestParam(value = "textElements", required = false) String textElementsJson,
//            @RequestParam(value = "listElements", required = false) String listElementsJson,
//            @RequestParam(value = "imageElements", required = false) String imageElementsJson,
//            @RequestParam(value = "images", required = false) List<MultipartFile[]> images,
//            @RequestParam(value = "images", required = false) List<MultipartFile[]> files,
//            @RequestParam(value = "images", required = false) MultipartFile[] videos) {
//
//
//        File directory = new File(imagesPath);
//        if (!directory.exists()) {
//            directory.mkdirs();
//        }
//        directory = new File(videosPath);
//        if (!directory.exists()) {
//            directory.mkdirs();
//        }
//        directory = new File(filesPath);
//        if (!directory.exists()) {
//            directory.mkdirs();
//        }
//
//        if (images != null) {
//            for (MultipartFile[] imageFiles : images) {
//                for (MultipartFile file : imageFiles) {
//                    if (!file.isEmpty()) {
//                        try {
//                            Path path = Paths.get(imagesPath, file.getOriginalFilename());
//                            file.transferTo(path.toFile());
//                        } catch (IOException e) {
//                            e.printStackTrace();
//                            return ResponseEntity.status(500).body("File upload failed: " + e.getMessage());
//                        }
//                    }
//                }
//            }
//        }
//
//        return ResponseEntity.ok("Data processed successfully");
//    }

    @PostMapping
    public ResponseEntity<String> addData(@ModelAttribute AddData addData) {
        System.out.println(addData);
        if (addData.getImageElements() != null) {
            for (AddImageElement imageElement : addData.getImageElements()) {
                MultipartFile[] images = imageElement.getImages();
                if (images != null) {
                    for (MultipartFile file : images) {
                        if (!file.isEmpty()) {
                            try {
                                Path path = Paths.get(imagesPath, file.getOriginalFilename());
                                file.transferTo(path.toFile());
                                System.out.println("Saved image file: " + file.getOriginalFilename());
                            } catch (IOException e) {
                                e.printStackTrace();
                                return ResponseEntity.status(500).body("Image upload failed: " + e.getMessage());
                            }
                        }
                    }
                }
            }
        }

        // Обработка файлов
        if (addData.getFileElements() != null) {
            for (AddFileElement fileElement : addData.getFileElements()) {
                MultipartFile[] files = fileElement.getFiles();
                if (files != null) {
                    for (MultipartFile file : files) {
                        if (!file.isEmpty()) {
                            try {
                                Path path = Paths.get(imagesPath, file.getOriginalFilename());
                                file.transferTo(path.toFile());
                                System.out.println("Saved file: " + file.getOriginalFilename());
                            } catch (IOException e) {
                                e.printStackTrace();
                                return ResponseEntity.status(500).body("File upload failed: " + e.getMessage());
                            }
                        }
                    }
                }
            }
        }

        // Обработка видео
        if (addData.getVideoElements() != null) {
            for (AddVideoElement videoElement : addData.getVideoElements()) {
                MultipartFile video = videoElement.getVideo();
                if (video != null && !video.isEmpty()) {
                    try {
                        Path path = Paths.get(imagesPath, video.getOriginalFilename());
                        video.transferTo(path.toFile());
                        System.out.println("Saved video file: " + video.getOriginalFilename());
                    } catch (IOException e) {
                        e.printStackTrace();
                        return ResponseEntity.status(500).body("Video upload failed: " + e.getMessage());
                    }
                }
            }
        }
        return ResponseEntity.ok("OK");
    }

}
@Data
class AddData{
    private String title;
    private Long subjectId;
    private Long groupId;
    private List<AddTextElement> textElements = new ArrayList<>();
    private List<AddListElement> listElements = new ArrayList<>();
    private List<AddImageElement> imageElements = new ArrayList<>();
    private List<AddFileElement> fileElements = new ArrayList<>();
    private List<AddVideoElement> videoElements = new ArrayList<>();
    private List<AddLinkElement> linkElements = new ArrayList<>();
}
@Data
class AddTextElement {
    private String text;
    private String title;
    private Integer index;
}
@Data
class AddListElement {
    private String title;
    private String d1;
    private String d2;
    private String d3;
    private String d4;
    private String d5;
    private String d6;
    private String d7;
    private String d8;
    private String d9;
    private String d10;
    private Integer index;
}
@Data
class AddImageElement {
    private String title;
    private MultipartFile[] images;
    private Integer index;
}
@Data
class AddFileElement {
    private String title;
    private MultipartFile[] files;
    private Integer index;
}
@Data
class AddVideoElement {
    private String title;
    private MultipartFile video;
    private Integer index;
}
@Data
class AddLinkElement {
    private String title;
    private String linkText;
    private String link;
    private Integer index;
}
