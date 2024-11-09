package mpkrepak.studyapp.server.domain.classElements;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class TextPageElement extends AbstractPageElement {
    private String title;
    private String text;
}
