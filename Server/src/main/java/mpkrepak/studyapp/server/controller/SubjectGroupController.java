package mpkrepak.studyapp.server.controller;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.GroupClass;
import mpkrepak.studyapp.server.domain.SubjectGroup;
import mpkrepak.studyapp.server.service.SubjectGroupService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subject-groups")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class SubjectGroupController {
    private final SubjectGroupService subjectGroupService;
    @GetMapping
    public List<SubjectGroup> getBySubjectId(@RequestParam Long subjectId) {
        return subjectGroupService.findAllBySubjectId(subjectId);
    }
    @GetMapping("/{id}")
    public SubjectGroup getById(@PathVariable Long id) {
        return subjectGroupService.findById(id);
    }
    @PostMapping("/{id}")
    public SubjectGroup getAll(@PathVariable Long id, @RequestBody SubjectGroup subjectGroup){
        return subjectGroupService.add(id, subjectGroup);
    }
    @PutMapping("/{id}")
    public SubjectGroup update(@PathVariable Long id, @RequestBody SubjectGroup subjectGroup){
        return subjectGroupService.update(id, subjectGroup);
    }
    @DeleteMapping("/{id}")
    public SubjectGroup delete(@PathVariable Long id){
        return subjectGroupService.delete(id);
    }
}

