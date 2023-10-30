package com.mipadobu.core.repository;


import lombok.Data;

@Data
public class MemberUpdateDto {

    private String name;
    private String studentId;
    private String type;
    private String text;
    private String selection;

    public MemberUpdateDto(String name, String studentId) {
        this.name = name;
        this.studentId = studentId;
    }

    public MemberUpdateDto(String type, String text, String selection) {
        this.type = type;
        this.text = text;
        this.selection = selection;
    }
}
