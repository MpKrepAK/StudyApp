package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.AcademicSubject;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AcademicSubjectRepository extends JpaRepository<AcademicSubject, Long> {
}
