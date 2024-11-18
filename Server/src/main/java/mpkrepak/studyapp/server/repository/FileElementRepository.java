package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.FileElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface FileElementRepository extends JpaRepository<FileElement, Long> {
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM file_element WHERE id = :id", nativeQuery = true)
    void deleteById(@Param("id") Long id);
}
