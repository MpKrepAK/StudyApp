package mpkrepak.studyapp.server.domain.classElements;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class ListPageElement extends AbstractPageElement {
    private String title;
    @OneToMany(mappedBy = "listPageElement", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<ListElement> elements;
}
