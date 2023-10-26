package com.mipadobu.core.repository;

import com.mipadobu.core.domain.Student;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MemoryStudentRepository implements StudentRepository{
    private static Map<Long, Student> store = new HashMap<>();
    private static Long sequence = 0L;

    @Override
    public Student save(Student student) {
        student.setStudentID(++sequence);
        store.put(student.getStudentID(), student);
        return student;
    }

    @Override
    public Optional<Student> findById(Long studentID) {
        return Optional.ofNullable(store.get(studentID));
    }

    @Override
    public Optional<Student> findByName(String studentName) {
        return store.values().stream()
                .filter(student -> student.getStudentName().equals(studentName))
                .findAny();
    }

    @Override
    public List<Student> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore() {
        store.clear();
    }
}
