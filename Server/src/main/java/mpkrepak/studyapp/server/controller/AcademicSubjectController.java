package mpkrepak.studyapp.server.controller;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.AcademicSubject;
import mpkrepak.studyapp.server.service.AcademicSubjectService;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/{id}")
    public AcademicSubject getById(@PathVariable long id){
        return academicSubjectService.findById(id);
    }
    @PutMapping("/{id}")
    public AcademicSubject updateById(@RequestBody AcademicSubject academicSubject, @PathVariable long id){
        return academicSubjectService.updateById(id, academicSubject);
    }
    @DeleteMapping("/{id}")
    public AcademicSubject deleteById(@PathVariable long id){
        return academicSubjectService.deleteById(id);
    }
    @PostMapping()
    public AcademicSubject deleteById(@RequestBody AcademicSubject academicSubject){
        return academicSubjectService.add(academicSubject);
    }
}
