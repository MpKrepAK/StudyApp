package mpkrepak.studyapp.server.service;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.AcademicSubject;
import mpkrepak.studyapp.server.repository.AcademicSubjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AcademicSubjectService {
    private final AcademicSubjectRepository academicSubjectRepository;
    public List<AcademicSubject> findAll() {
        return academicSubjectRepository.findAll();
    }
}
