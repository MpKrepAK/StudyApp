package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.GroupClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface GroupClassRepository extends JpaRepository<GroupClass, Long> {
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM elements WHERE group_id = :groupId", nativeQuery = true)
    void deleteElementsByGroupId(@Param("groupId") Long groupId);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM group_classes WHERE id = :groupId", nativeQuery = true)
    void deleteGroupClassById(@Param("groupId") Long groupId);

}
