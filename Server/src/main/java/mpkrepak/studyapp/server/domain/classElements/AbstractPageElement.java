package mpkrepak.studyapp.server.domain.classElements;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;
import mpkrepak.studyapp.server.domain.GroupClass;

@Data
@Entity
@Table(name = "elements")
@Inheritance(strategy = InheritanceType.JOINED)
public class AbstractPageElement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String type;
    private int index;
    @ManyToOne
    @JoinColumn(name = "group_id")
    @JsonBackReference
    private GroupClass group;

}
