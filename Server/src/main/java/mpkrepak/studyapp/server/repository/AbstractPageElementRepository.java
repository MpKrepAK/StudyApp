package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.AbstractPageElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AbstractPageElementRepository extends JpaRepository<AbstractPageElement, Long> {
}
