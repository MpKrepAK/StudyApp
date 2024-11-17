package mpkrepak.studyapp.server.service;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.AcademicSubject;
import mpkrepak.studyapp.server.domain.GroupClass;
import mpkrepak.studyapp.server.domain.SubjectGroup;
import mpkrepak.studyapp.server.repository.GroupClassRepository;
import mpkrepak.studyapp.server.repository.SubjectGroupRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupClassService {
    private final GroupClassRepository groupClassRepository;
    private final SubjectGroupRepository subjectGroupRepository;
    private final EntityManager entityManager;
    public List<GroupClass> findAll() {
        return groupClassRepository.findAll();
    }

    public GroupClass findById(Long id) {
        return groupClassRepository.findById(id).orElse(null);
    }

    public List<GroupClass> findAllByGroupId(Long id) {
        return subjectGroupRepository.findById(id).get().getGroupClasses();
    }

    public GroupClass update(Long id, GroupClass groupClass) {
        GroupClass old = findById(id);
        old.setName(groupClass.getName());
        old.setIndex(groupClass.getIndex());
        return groupClassRepository.save(old);
    }

    public GroupClass delete(Long id) {
        groupClassRepository.deleteElementsByGroupId(id);

        groupClassRepository.deleteGroupClassById(id);
        return null;
    }
}
