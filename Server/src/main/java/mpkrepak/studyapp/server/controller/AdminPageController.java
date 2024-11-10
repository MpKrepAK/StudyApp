package mpkrepak.studyapp.server.controller;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/admin/page")
@RequiredArgsConstructor
public class AdminPageController {

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<String> addData(@ModelAttribute AddData data) {
        System.out.println("Title: " + data.getTitle());

        // Логирование текстовых элементов
        if (data.getTextElements() != null) {
            data.getTextElements().forEach(te -> System.out.println("Text Element: " + te.getText()));
        }

        // Логирование элементов списка
        if (data.getListElements() != null) {
            data.getListElements().forEach(le -> System.out.println("List Element: " + le.getTitle()));
        }

        // Логирование элементов с изображениями
        if (data.getImageElements() != null) {
            data.getImageElements().forEach(imgElement -> {
                System.out.println("Image Element Title: " + imgElement.getTitle());
                if (imgElement.getImages() != null) {
                    for (MultipartFile file : imgElement.getImages()) {
                        if (!file.isEmpty()) {
                            System.out.println("Uploaded file: " + file.getOriginalFilename());
                        }
                    }
                }
            });
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
}
@Data
class AddTextElement{
    private String text;
    private String title;
}
@Data
class AddListElement{
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
}
@Data
class AddImageElement{
    private String title;
    private MultipartFile[] images;
}