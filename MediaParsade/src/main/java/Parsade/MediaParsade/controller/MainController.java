package Parsade.MediaParsade.controller;


import Parsade.MediaParsade.login.LoginForm;
import Parsade.MediaParsade.member.Member;
import Parsade.MediaParsade.member.MemberRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;


@Slf4j
@RequiredArgsConstructor
@Controller
public class MainController {

    MemberRepository memberRepository;


    // 시작페이지 접근 시, login 페이지로 리다이렉트
    @GetMapping("/")
    public String home(){
        return "redirect:/login";
    }



    // 로그인 페이지 접근 시, 해당 페이지 보여줌
    @GetMapping("/login")
    public String loginForm(@ModelAttribute("") LoginForm form){
        return "";
    }


    // 로그인 동시에 멤버 정보 저장소에 저장, 세션 부여: 30분 지속
    @PostMapping("/login")
    public String login(@ModelAttribute LoginForm form, HttpServletRequest request){
        Member member = new Member();
        member.setName(form.getName());
        member.setStudentId(form.getStudentId());
        memberRepository.save(member);
        HttpSession session = request.getSession();
        session.setAttribute("loginMember",member);

        return "redirect:/main";
    }


    // 로그아웃 시 해당 세션 제거 및 로그인 페이지로 리다이렉트
    @PostMapping("/logout")
    public String logout(HttpServletRequest request){
        HttpSession session = request.getSession(false);
        if(session != null){
            session.invalidate();
        }
        return "redirect:/login";
    }


    @GetMapping("/main")
    public String mainPage(){
        return "";
    }

    @GetMapping("/common")
    public String common(){
        return "";
    }

    @GetMapping("/dev")
    public String dev(){
        return "";
    }

    @GetMapping("/guest")
    public String guest(){
        return "";
    }


}
