package com.mipadobu.core.repository;

import com.mipadobu.core.domain.Student;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

public class JpaStudentRepository implements StudentRepository{

    private final EntityManager em;

    public JpaStudentRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Student save(Student student) {
        em.persist(student);
        return student;
    }

    @Override
    public Optional<Student> findById(Long studentID) {
        Student student = em.find(Student.class, studentID);
        return Optional.ofNullable(student);
    }

    @Override
    public Optional<Student> findByName(String studentName) {
        List <Student> result = em.createQuery("select m from Student m where m.studentName = :name", Student.class)
                .setParameter("name", studentName)
                .getResultList();

        return result.stream().findAny();
    }

    @Override
    public List<Student> findAll() {
        return  em.createQuery("select m from Student m", Student.class)
                .getResultList();
    }

}
