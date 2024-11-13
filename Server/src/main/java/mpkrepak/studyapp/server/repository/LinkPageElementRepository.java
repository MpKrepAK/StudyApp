package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.LinkPageElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkPageElementRepository extends JpaRepository<LinkPageElement, Long> {
}
