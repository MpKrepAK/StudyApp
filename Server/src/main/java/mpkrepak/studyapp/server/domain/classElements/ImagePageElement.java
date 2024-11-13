package mpkrepak.studyapp.server.domain.classElements;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
public class ImagePageElement extends AbstractPageElement{
    private String title;
    @OneToMany(mappedBy = "imagePageElement", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<ImageElement> elements;
}
