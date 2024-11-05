package mpkrepak.studyapp.server.service;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.AcademicSubject;
import mpkrepak.studyapp.server.domain.GroupClass;
import mpkrepak.studyapp.server.repository.GroupClassRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupClassService {
    private final GroupClassRepository groupClassRepository;
    public List<GroupClass> findAll() {
        return groupClassRepository.findAll();
    }

    public GroupClass findById(Long id) {
        return groupClassRepository.findById(id).orElse(null);
    }
}
