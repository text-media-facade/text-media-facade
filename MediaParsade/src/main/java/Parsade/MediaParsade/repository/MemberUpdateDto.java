package Parsade.MediaParsade.repository;


import Parsade.MediaParsade.domain.Property;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Data
public class MemberUpdateDto {


    private String type;
    private String text;
    private String selection;
    private String property;

    public MemberUpdateDto() {
    }

    public MemberUpdateDto(String type, String text, String selection) {
        this.type = type;
        this.text = text;
        this.selection = selection;
    }

    public MemberUpdateDto(String type, String text, Property property) {
        this.type = type;
        this.text = text;
        this.property = property.toString();
        log.info(property.toString());
    }
}
