package mpkrepak.studyapp.server.domain.classElements;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;
import mpkrepak.studyapp.server.domain.GroupClass;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Data
@Entity
@Table(name = "elements")
@Inheritance(strategy = InheritanceType.JOINED)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type"
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = TextPageElement.class, name = "text"),
        @JsonSubTypes.Type(value = ListPageElement.class, name = "list"),
        @JsonSubTypes.Type(value = LinkPageElement.class, name = "link"),
        @JsonSubTypes.Type(value = FilePageElement.class, name = "file"),
        @JsonSubTypes.Type(value = ImagePageElement.class, name = "image"),
        @JsonSubTypes.Type(value = VideoPageElement.class, name = "video"),
})
public class AbstractPageElement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String type;
    private int index;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "group_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonBackReference
    private GroupClass group;

}
