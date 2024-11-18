package mpkrepak.studyapp.server.domain.classElements;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cascade;

import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class FilePageElement extends AbstractPageElement{
    private String title;
    @OneToMany(mappedBy = "filePageElement", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<FileElement> elements;

}
