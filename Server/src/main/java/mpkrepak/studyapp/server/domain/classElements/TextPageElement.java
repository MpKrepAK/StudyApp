package mpkrepak.studyapp.server.domain.classElements;

import jakarta.persistence.Entity;

@Entity
public class TextPageElement extends AbstractPageElement {
    private String title;
    private String text;
}
