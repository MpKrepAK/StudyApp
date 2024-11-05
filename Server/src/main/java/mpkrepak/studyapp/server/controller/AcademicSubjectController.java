package mpkrepak.studyapp.server.controller;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.AcademicSubject;
import mpkrepak.studyapp.server.service.AcademicSubjectService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/academic-subjects")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AcademicSubjectController {
    private final AcademicSubjectService academicSubjectService;
    @GetMapping
    public List<AcademicSubject> getAll(){
        return academicSubjectService.findAll();
    }
}
