package mpkrepak.studyapp.server.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Fetch;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "subject_groups")
public class SubjectGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int index;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "subject_id")
    private AcademicSubject academicSubject;
    @OneToMany(mappedBy = "group",fetch = FetchType.EAGER)
    private Set<GroupClass> groupClasses = new HashSet<>();
}
