package mpkrepak.studyapp.server.controller;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.SubjectGroup;
import mpkrepak.studyapp.server.service.SubjectGroupService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subject-groups")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class SubjectGroupController {
    private final SubjectGroupService subjectGroupService;
    @GetMapping
    public List<SubjectGroup> getBySubjectId(@RequestParam Long subjectId) {
        return subjectGroupService.findAllBySubjectId(subjectId);
    }

}
