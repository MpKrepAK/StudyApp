package mpkrepak.studyapp.server.controller;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.GroupClass;
import mpkrepak.studyapp.server.service.GroupClassService;
import org.springframework.web.bind.annotation.*;

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
}
