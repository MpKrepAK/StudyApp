package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.ImagePageElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagePageElementRepository extends JpaRepository<ImagePageElement, Integer> {
}
