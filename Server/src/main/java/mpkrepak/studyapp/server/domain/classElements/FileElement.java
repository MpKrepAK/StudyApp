package mpkrepak.studyapp.server.domain.classElements;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class FileElement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String data;
    private String fileType;
    @ManyToOne
    @JsonBackReference
    private FilePageElement filePageElement;
}
