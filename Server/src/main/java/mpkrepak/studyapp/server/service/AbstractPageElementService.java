package mpkrepak.studyapp.server.service;

import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.AcademicSubject;
import mpkrepak.studyapp.server.domain.classElements.AbstractPageElement;
import mpkrepak.studyapp.server.repository.AbstractPageElementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AbstractPageElementService {
    private final AbstractPageElementRepository abstractPageElementRepository;
    public List<AbstractPageElement> findAll() {
        return abstractPageElementRepository.findAll();
    }
}
