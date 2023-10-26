package com.mipadobu.core;

import com.mipadobu.core.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {
    private final StudentRepository studentRepository;
    @Autowired
    public Config(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

}
