package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.FilePageElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilePageElementRepository extends JpaRepository<FilePageElement, Long> {
}
