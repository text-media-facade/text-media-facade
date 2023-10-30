package com.mipadobu.core.member;

public class StudentForm {
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getStudentID() {
        return studentID;
    }

    public void setStudentID(Long studentID) {
        this.studentID = studentID;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPresetFunction() {
        return presetFunction;
    }

    public void setPresetFunction(String presetFunction) {
        this.presetFunction = presetFunction;
    }

    private String name; // 학생 이름
    private Long studentID; // 학생 ID, 자동 생성
    private String text; // 텍스트
    private String presetFunction; // 프리셋 함수
}
