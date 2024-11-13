package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.TextPageElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TextPageElementRepository extends JpaRepository<TextPageElement, Long> {
}
