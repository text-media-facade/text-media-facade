package com.mipadobu.core.controller;

import com.mipadobu.core.domain.Student;
import com.mipadobu.core.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

@Controller
public class CommonController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/")
    public String getLogin() { return "login"; }

    @GetMapping("/main")
    public String getMain() { return "main"; }

    @GetMapping("/mainToCommon")
    public String getCommon() {
        return "common";
    }

    @GetMapping("/mainToDev")
    public String getDev() { return "Dev"; }

    @GetMapping("/Display")
    public String getDisplay(@RequestParam("text") String text, @RequestParam("preset") String preset, @RequestParam("user") String user, Model model) throws UnsupportedEncodingException {
        String decodedText = URLDecoder.decode(text, "UTF-8");
        model.addAttribute("preset", preset);
        model.addAttribute("text", decodedText);
        return "display";
    }

    @PostMapping("/common-post")
    public String postCommon(@RequestParam("text") String text, @RequestParam("preset") String preset, Model model) throws UnsupportedEncodingException {
        String encodedText = URLEncoder.encode(text, "UTF-8");
        return "redirect:/commonToDisplay?text=" + encodedText + "&preset=" + preset;
    }

    @PostMapping("/login-post")
    public String postStudent(@RequestParam("studentName") String studentName, @RequestParam("studentID") Long studentID ) {
        Student student = new Student();
        student.setStudentName(studentName);
        student.setStudentID(studentID);
        studentRepository.save(student);
        return "redirect:/main";
    }
}
