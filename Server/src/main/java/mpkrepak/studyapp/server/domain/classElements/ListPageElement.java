package mpkrepak.studyapp.server.domain.classElements;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class ListPageElement extends AbstractPageElement {
    private String title;
    private boolean isOrdered;
    @OneToMany(mappedBy = "listPageElement", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<ListElement> elements;
}
