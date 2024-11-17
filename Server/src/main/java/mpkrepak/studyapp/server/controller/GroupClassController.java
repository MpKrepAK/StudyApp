package mpkrepak.studyapp.server.controller;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.GroupClass;
import mpkrepak.studyapp.server.domain.SubjectGroup;
import mpkrepak.studyapp.server.repository.AcademicSubjectRepository;
import mpkrepak.studyapp.server.service.GroupClassService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/group-classes")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class GroupClassController {
    private final GroupClassService groupClassService;
    @GetMapping
    public GroupClass getById(@RequestParam Long id){
        return groupClassService.findById(id);
    }
    @GetMapping("/{id}")
    public List<GroupClass> getAllByGroupId(@PathVariable Long id){
        return groupClassService.findAllByGroupId(id);
    }
    @PutMapping("/{id}")
    public GroupClass update(@PathVariable Long id, @RequestBody GroupClass groupClass){
        return groupClassService.update(id, groupClass);
    }
    @DeleteMapping("/{id}")
    public GroupClass delete(@PathVariable Long id){
        return groupClassService.delete(id);
    }
}
