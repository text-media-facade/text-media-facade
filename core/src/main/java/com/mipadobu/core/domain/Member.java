package com.mipadobu.core.domain;

import javax.persistence.*;

@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "studentID")
    private Long studentID; //// 학생 ID, 자동 생성
    @Column(name = "name")
    private String name; // 학생 이름
    @Column(name = "text")
    private String text; // 텍스트
    @Column(name = "presetOrFunction")
    private String presetOrFunction; // 프리셋 함수

    public Long getStudentID() {
        return studentID;
    }

    public void setStudentID(Long studentID) {
        this.studentID = studentID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPresetOrFunction() {
        return presetOrFunction;
    }

    public void setPresetOrFunction(String presetOrFunction) {
        this.presetOrFunction = presetOrFunction;
    }
}