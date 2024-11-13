package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.ListPageElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListPageElementRepository extends JpaRepository<ListPageElement, Integer> {
}
