package mpkrepak.studyapp.server.domain.classElements;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class LinkPageElement extends AbstractPageElement{
    private String title;
    private String linkText;
    private String link;
}
