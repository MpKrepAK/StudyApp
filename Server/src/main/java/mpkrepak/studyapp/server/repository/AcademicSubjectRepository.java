package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.AcademicSubject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademicSubjectRepository extends JpaRepository<AcademicSubject, Long> {
}
