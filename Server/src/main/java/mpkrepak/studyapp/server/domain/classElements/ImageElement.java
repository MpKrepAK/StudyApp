package mpkrepak.studyapp.server.domain.classElements;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ImageElement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String data;
    @ManyToOne
    @JsonBackReference
    private ImagePageElement imagePageElement;
}
