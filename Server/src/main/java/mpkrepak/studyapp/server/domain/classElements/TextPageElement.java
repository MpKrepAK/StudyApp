package mpkrepak.studyapp.server.domain.classElements;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class TextPageElement extends AbstractPageElement {
    private String title;
    @Column(columnDefinition = "TEXT")
    private String text;
}
