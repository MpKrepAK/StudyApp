package mpkrepak.studyapp.server.repository;

import mpkrepak.studyapp.server.domain.classElements.ListElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListElementRepository extends JpaRepository<ListElement, Integer> {
}
