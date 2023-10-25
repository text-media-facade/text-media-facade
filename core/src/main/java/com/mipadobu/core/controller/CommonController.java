package com.mipadobu.core.controller;

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

    @GetMapping("/")
    public String commonGet() {
        return "common";
    }
    @GetMapping("/commonToDisplay")
    public String commonToDisplay(@RequestParam("text") String text, @RequestParam("preset") String preset, Model model) throws UnsupportedEncodingException {
        String decodedText = URLDecoder.decode(text, "UTF-8");
        model.addAttribute("preset", preset);
        model.addAttribute("text", decodedText);
        return "display";
    }

    @PostMapping("/common-post")
    public String commonPost(@RequestParam("text") String text, @RequestParam("preset") String preset, Model model) throws UnsupportedEncodingException {
        String encodedText = URLEncoder.encode(text, "UTF-8");
        return "redirect:/commonToDisplay?text=" + encodedText + "&preset=" + preset;
    }
}
