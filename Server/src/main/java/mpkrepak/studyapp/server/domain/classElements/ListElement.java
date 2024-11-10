package mpkrepak.studyapp.server.domain.classElements;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ListElement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String data;
    @ManyToOne
    @JsonBackReference
    private ListPageElement listPageElement;
}
