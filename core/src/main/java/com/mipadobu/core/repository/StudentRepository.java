package com.mipadobu.core.repository;

import com.mipadobu.core.domain.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface StudentRepository {
    Student save(Student student);
    Optional<Student> findById(Long studentID);
    Optional<Student> findByName(String studentName);
    List<Student> findAll();
    // 여기에서 추가적인 메소드를 정의할 수 있음
}