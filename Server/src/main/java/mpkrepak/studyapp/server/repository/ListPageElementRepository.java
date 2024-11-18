package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.ListPageElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ListPageElementRepository extends JpaRepository<ListPageElement, Long> {
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM list_page_element WHERE id = :id", nativeQuery = true)
    void deleteById(@Param("id") Long id);
}
