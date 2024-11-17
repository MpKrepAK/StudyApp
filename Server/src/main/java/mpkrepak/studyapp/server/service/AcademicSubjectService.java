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

    public AcademicSubject findById(Long id) {
        return academicSubjectRepository.findById(id).orElse(null);
    }

    public AcademicSubject updateById(long id, AcademicSubject academicSubject) {
        AcademicSubject ac = academicSubjectRepository.findById(id).orElse(null);
        ac.setName(academicSubject.getName());
        return academicSubjectRepository.save(ac);
    }

    public AcademicSubject deleteById(long id) {
        academicSubjectRepository.deleteById(id);
        return null;
    }

    public AcademicSubject add(AcademicSubject academicSubject) {
        return academicSubjectRepository.save(academicSubject);
    }
}
