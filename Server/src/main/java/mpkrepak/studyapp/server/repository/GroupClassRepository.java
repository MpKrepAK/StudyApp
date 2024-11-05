package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.GroupClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupClassRepository extends JpaRepository<GroupClass, Long> {
}
