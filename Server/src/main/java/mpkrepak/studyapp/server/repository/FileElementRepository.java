package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.FileElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileElementRepository extends JpaRepository<FileElement, Long> {
}
