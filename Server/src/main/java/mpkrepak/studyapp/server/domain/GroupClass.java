package mpkrepak.studyapp.server.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import mpkrepak.studyapp.server.domain.classElements.AbstractPageElement;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "group_classes")
public class GroupClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int index;
    @OneToMany(mappedBy = "group", fetch = FetchType.EAGER)
    private Set<AbstractPageElement> elements;
    @ManyToOne
    @JoinColumn(name = "group_id")
    @JsonBackReference
    private SubjectGroup group;
}
