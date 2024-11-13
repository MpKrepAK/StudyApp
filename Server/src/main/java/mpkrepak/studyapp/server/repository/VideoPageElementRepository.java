package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.VideoPageElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoPageElementRepository extends JpaRepository<VideoPageElement, Long> {
}
