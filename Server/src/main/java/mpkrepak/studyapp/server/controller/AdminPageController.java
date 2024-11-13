package mpkrepak.studyapp.server.controller;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.GroupClass;
import mpkrepak.studyapp.server.domain.classElements.*;
import mpkrepak.studyapp.server.repository.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

    private final GroupClassRepository groupClassRepository;
    private final SubjectGroupRepository subjectGroupRepository;

    private final TextPageElementRepository textPageElementRepository;
    private final LinkPageElementRepository linkPageElementRepository;
    private final ListPageElementRepository listPageElementRepository;
    private final VideoPageElementRepository videoPageElementRepository;
    private final FilePageElementRepository filePageElementRepository;
    private final ImagePageElementRepository imagePageElementRepository;

    private final ImageElementRepository imageElementRepository;
    private final FileElementRepository fileElementRepository;
    private final ListElementRepository listElementRepository;




    @PostMapping
    public ResponseEntity<String> addData(@ModelAttribute AddData addData) {
        System.out.println(addData);

        var subjectGroup = subjectGroupRepository.findById(addData.getGroupId()).orElseThrow();
        var groupClass = new GroupClass();
        groupClass.setName(addData.getTitle());
        groupClass.setIndex(0);
        groupClass.setGroup(subjectGroup);
        var newGC = groupClassRepository.save(groupClass);

        List<TextPageElement> textPageElements = new ArrayList<>();
        List<LinkPageElement> linkPageElements = new ArrayList<>();
        List<VideoPageElement> videoPageElements = new ArrayList<>();

        addData.getTextElements().forEach(x->{
            TextPageElement element = new TextPageElement();
            element.setTitle(x.getTitle());
            element.setText(x.getText());
            element.setIndex(x.getIndex());
            element.setType("text");
            element.setGroup(newGC);
            textPageElements.add(element);
        });

        addData.getLinkElements().forEach(x->{
            LinkPageElement element = new LinkPageElement();
            element.setTitle(x.getTitle());
            element.setLinkText(x.getLinkText());
            element.setLink(x.getLink());
            element.setIndex(x.getIndex());
            element.setType("link");
            element.setGroup(newGC);
            linkPageElements.add(element);
        });

        addData.getVideoElements().forEach(x->{
            VideoPageElement element = new VideoPageElement();
            element.setTitle(x.getTitle());
            element.setVideoPath(x.getVideo().getOriginalFilename());
            element.setIndex(x.getIndex());
            element.setIndex(x.getIndex());
            element.setType("video");
            element.setGroup(newGC);
            videoPageElements.add(element);
        });

        textPageElementRepository.saveAll(textPageElements);
        linkPageElementRepository.saveAll(linkPageElements);
        videoPageElementRepository.saveAll(videoPageElements);

        addData.getListElements().forEach(x->{
            var arr = Stream.of(x.getD1(), x.getD2(), x.getD3(), x.getD4(), x.getD5(), x.getD6(), x.getD7(), x.getD8(), x.getD9(), x.getD10()).filter(e->!e.isEmpty()).collect(Collectors.toSet());
            var data = arr.stream().map(e->{
                var d = new ListElement();
                d.setData(e);
                return d;
            }).collect(Collectors.toSet());
            ListPageElement element = new ListPageElement();
            element.setTitle(x.getTitle());
            element.setIndex(x.getIndex());
            element.setOrdered(x.getOrdered().equals("Нумерованный"));
            element.setType("list");
            element.setGroup(newGC);
            element.setElements(data);
            var newEnt = listPageElementRepository.save(element);
            data.forEach(d->{
                d.setListPageElement(newEnt);
            });
            listElementRepository.saveAll(data);
        });

        addData.getImageElements().forEach(x->{
            var arr = Arrays.stream(x.getImages()).map(MultipartFile::getOriginalFilename).toList();
            var data = arr.stream().map(e->{
                var d = new ImageElement();
                d.setData(e);
                return d;
            }).collect(Collectors.toSet());
            ImagePageElement element = new ImagePageElement();
            element.setTitle(x.getTitle());
            element.setIndex(x.getIndex());
            element.setType("image");
            element.setGroup(newGC);
            element.setElements(data);
            var newEnt = imagePageElementRepository.save(element);
            data.forEach(d->{
                d.setImagePageElement(newEnt);
            });
            imageElementRepository.saveAll(data);
        });

//        addData.getFileElements().forEach(x->{
//            var arr = Arrays.stream(x.getFiles()).map(MultipartFile::getOriginalFilename).toList();
//            var data = arr.stream().map(e->{
//                var d = new FileElement();
//                d.setData(e);
//                return d;
//            }).collect(Collectors.toSet());
//            FilePageElement element = new FilePageElement();
//            element.setTitle(x.getTitle());
//            element.setIndex(x.getIndex());
//            element.setType("file");
//            element.setGroup(newGC);
//            element.setElements(data);
//            var newEnt = filePageElementRepository.save(element);
//            data.forEach(d->{
//                d.setFilePageElement(newEnt);
//            });
//            fileElementRepository.saveAll(data);
//        });

        addData.getFileElements().forEach(x -> {
            var arr = Arrays.stream(x.getFiles())
                    .map(MultipartFile::getOriginalFilename)
                    .toList();

            var data = arr.stream().map(e -> {
                var d = new FileElement();
                d.setData(e);
                d.setFileType(determineFileType(e));
                return d;
            }).collect(Collectors.toSet());

            FilePageElement element = new FilePageElement();
            element.setTitle(x.getTitle());
            element.setIndex(x.getIndex());
            element.setType("file");
            element.setGroup(newGC);
            element.setElements(data);

            var newEnt = filePageElementRepository.save(element);

            data.forEach(d -> {
                d.setFilePageElement(newEnt);
            });

            fileElementRepository.saveAll(data);
        });





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

        if (addData.getFileElements() != null) {
            for (AddFileElement fileElement : addData.getFileElements()) {
                MultipartFile[] files = fileElement.getFiles();
                if (files != null) {
                    for (MultipartFile file : files) {
                        if (!file.isEmpty()) {
                            try {
                                Path path = Paths.get(filesPath, file.getOriginalFilename());
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

        if (addData.getVideoElements() != null) {
            for (AddVideoElement videoElement : addData.getVideoElements()) {
                MultipartFile video = videoElement.getVideo();
                if (video != null && !video.isEmpty()) {
                    try {
                        Path path = Paths.get(videosPath, video.getOriginalFilename());
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


    private String determineFileType(String filename) {
        String fileType;
        String extension = getFileExtension(filename).toLowerCase();

        switch (extension) {
            case "zip":
            case "rar":
            case "tar":
            case "gz":
                fileType = "archive";
                break;
            case "doc":
            case "docx":
                fileType = "doc";
                break;
            case "pdf":
                fileType = "pdf";
                break;
            case "xls":
            case "xlsx":
                fileType = "excel";
                break;
            default:
                fileType = "file"; // По умолчанию
                break;
        }

        return fileType;
    }

    // Метод для получения расширения файла
    private String getFileExtension(String filename) {
        int lastIndexOfDot = filename.lastIndexOf('.');
        if (lastIndexOfDot == -1) {
            return ""; // Если нет расширения
        }
        return filename.substring(lastIndexOfDot + 1);
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
    private String ordered;
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
