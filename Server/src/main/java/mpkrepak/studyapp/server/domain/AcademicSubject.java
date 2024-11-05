package mpkrepak.studyapp.server.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "academic_subjects")
public class AcademicSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @OneToMany(mappedBy = "academicSubject", fetch = FetchType.EAGER)
    private Set<SubjectGroup> subjectGroups = new HashSet<SubjectGroup>();
}
