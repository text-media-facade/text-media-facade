package Parsade.MediaParsade.controller;


import Parsade.MediaParsade.login.LoginForm;
import Parsade.MediaParsade.domain.Member;
import Parsade.MediaParsade.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@RequiredArgsConstructor
@Controller
public class MainController {

    private final MemberService memberService;


    // 리액트에서 JSON 객체로 로그인 정보를 넘겨주면 멤버저장소에 저장 -> 추후 mysql 연결 예정
    @ResponseBody
    @PostMapping("/login")
    public Member login(@RequestBody LoginForm form, HttpServletRequest request){
        Member member = new Member();
        member.setName(form.getName());
        member.setStudentId(form.getStudentId());
        memberService.save(member);
        log.info("name={}, studentId={}",member.getName(),member.getStudentId());

        // 추후 사용자 타입과 메세지, 효과가 들어올 때, 사용자를 구분하기 위해 세션을 붙여서 전송 -> 프론트엔드 파트와 통합 혹은 이야기 해봐야됨
        HttpSession session = request.getSession();
        session.setAttribute("사용자 정보", member);

        return member;
    }


    // 로그인 사용자 정보 반환:
    @ResponseBody
    @GetMapping("/guest")
    public List<Member> login(){
        return memberService.findAll();
    }



}
