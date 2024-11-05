package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.SubjectGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectGroupRepository extends JpaRepository<SubjectGroup, Long> {
    List<SubjectGroup> findAllByAcademicSubject_Id(Long id);
}
