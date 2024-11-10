package mpkrepak.studyapp.server.service;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.AcademicSubject;
import mpkrepak.studyapp.server.repository.AcademicSubjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AcademicSubjectService {
    private final AcademicSubjectRepository academicSubjectRepository;
    @Transactional(readOnly = true)
    public List<AcademicSubject> findAll() {
        var res = academicSubjectRepository.findAll();
        res.forEach(x->{
            System.out.println((long) x.getSubjectGroups().size());
        });
        return res;
    }
}
