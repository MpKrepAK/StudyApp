package mpkrepak.studyapp.server.service;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.AcademicSubject;
import mpkrepak.studyapp.server.domain.SubjectGroup;
import mpkrepak.studyapp.server.repository.AcademicSubjectRepository;
import mpkrepak.studyapp.server.repository.SubjectGroupRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubjectGroupService {
    private final SubjectGroupRepository subjectGroupRepository;
    public List<SubjectGroup> findAll() {
        return subjectGroupRepository.findAll();
    }
    public List<SubjectGroup> findAllBySubjectId(Long id) {
        return subjectGroupRepository.findAllByAcademicSubject_Id(id);
    }
}
