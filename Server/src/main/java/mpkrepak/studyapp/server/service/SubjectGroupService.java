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
    private final AcademicSubjectRepository academicSubjectRepository;
    public List<SubjectGroup> findAll() {
        return subjectGroupRepository.findAll();
    }
    public List<SubjectGroup> findAllBySubjectId(Long id) {
        return subjectGroupRepository.findAllByAcademicSubject_Id(id);
    }

    public SubjectGroup add(Long id, SubjectGroup subjectGroup) {
        subjectGroup.setAcademicSubject(academicSubjectRepository.findById(id).get());
        return subjectGroupRepository.save(subjectGroup);
    }

    public SubjectGroup findById(Long id) {
        return subjectGroupRepository.findById(id).get();
    }

    public SubjectGroup update(Long id, SubjectGroup subjectGroup) {
        var sg = subjectGroupRepository.findById(id).get();
        sg.setName(subjectGroup.getName());
        sg.setIndex(subjectGroup.getIndex());
        return subjectGroupRepository.save(sg);
    }
    public SubjectGroup delete(Long id) {
        subjectGroupRepository.deleteById(id);
        return null;
    }
}
