package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.ImageElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageElementRepository extends JpaRepository<ImageElement, Integer> {
}
