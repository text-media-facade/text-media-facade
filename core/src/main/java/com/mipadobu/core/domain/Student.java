package com.mipadobu.core.domain;

import javax.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "studentID")
    private Long studentID; //// 학생 ID, 자동 생성
    @Column(name = "studentName")
    private String studentName; // 학생 이름
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

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
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
// 생성자, getter, setter, 기타 메소드
}
