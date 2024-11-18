package mpkrepak.studyapp.server.service;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import mpkrepak.studyapp.server.domain.GroupClass;
import mpkrepak.studyapp.server.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupClassService {
    private final GroupClassRepository groupClassRepository;
    private final SubjectGroupRepository subjectGroupRepository;

    private final AbstractPageElementRepository elementRepository;
    private final VideoPageElementRepository videoPageElementRepository;
    private final TextPageElementRepository textPageElementRepository;
    private final LinkPageElementRepository linkPageElementRepository;
    private final ListPageElementRepository listPageElementRepository;
    private final FilePageElementRepository filePageElementRepository;
    private final ImagePageElementRepository imagePageElementRepository;
    private final FileElementRepository fileElementRepository;
    private final ImageElementRepository imageElementRepository;
    private final ListElementRepository listElementRepository;


    private final EntityManager entityManager;
    public List<GroupClass> findAll() {
        return groupClassRepository.findAll();
    }

    public GroupClass findById(Long id) {
        return groupClassRepository.findById(id).orElse(null);
    }

    public List<GroupClass> findAllByGroupId(Long id) {
        return subjectGroupRepository.findById(id).get().getGroupClasses();
    }

    public GroupClass update(Long id, GroupClass groupClass) {
        GroupClass old = findById(id);
        old.setName(groupClass.getName());
        old.setIndex(groupClass.getIndex());
        return groupClassRepository.save(old);
    }

    public GroupClass delete(Long id) {
        GroupClass group = groupClassRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Group not found"));

        group.getElements().forEach(element -> {
            System.out.println(element.getId());
            var video = videoPageElementRepository.findById(element.getId());
            var text = textPageElementRepository.findById(element.getId());
            var link = linkPageElementRepository.findById(element.getId());
            var list = listPageElementRepository.findById(element.getId());
            if (video.isPresent()) {
                videoPageElementRepository.deleteById(element.getId());
            }
            if (text.isPresent()) {
                textPageElementRepository.deleteById(element.getId());
            }
            if (link.isPresent()) {
                linkPageElementRepository.deleteById(element.getId());
            }

            if (list.isPresent()) {
                list.get().getElements().stream().forEach(x->{
                    listElementRepository.deleteById(x.getId());
                });
                listPageElementRepository.deleteById(element.getId());
            }


            var img = imagePageElementRepository.findById(element.getId());
            if (img.isPresent()) {
                img.get().getElements().stream().forEach(x->{
                    imageElementRepository.deleteById(x.getId());
                });
                imagePageElementRepository.deleteById(element.getId());
            }

            var file = filePageElementRepository.findById(element.getId());
            if (file.isPresent()) {
                file.get().getElements().stream().forEach(x->{
                    fileElementRepository.deleteById(x.getId());
                });
                filePageElementRepository.deleteById(element.getId());
            }


            elementRepository.deleteById(element.getId());

        });

        groupClassRepository.deleteGroupClassById(id);
        return null;
    }
}
