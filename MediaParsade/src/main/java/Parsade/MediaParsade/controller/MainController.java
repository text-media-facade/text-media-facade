package Parsade.MediaParsade.controller;


import Parsade.MediaParsade.domain.Member;
import Parsade.MediaParsade.domain.ReturnMember;
import Parsade.MediaParsade.service.MemberService;
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



    // 로그인 사용자 정보 반환:

    @ResponseBody
    @GetMapping("/api/guest")
    public List<ReturnMember> login(){
        log.info("요청받음");
        return memberService.findAll();
    }


    @ResponseBody
    @PostMapping("/api/common")
    public Member commons(@RequestBody Member member){

        ReturnMember returnMember = new ReturnMember();
        returnMember.setName(member.getName());
        returnMember.setType(member.getType());
        returnMember.setStudentId(member.getStudentId());
        returnMember.setText(member.getText());
        returnMember.setSelection(member.getSelection());

        log.info("name={}, studentId={}",returnMember.getName(), returnMember.getStudentId());
        memberService.save(returnMember);
        return member;
    }


    // 함수 사용자 저장 정보
    // 세션정보를 통해서 기존 로그인 정보를 가져와서 해당 열에 데이터베이스 정보를 업데이트 한다.
    @ResponseBody
    @PostMapping("/api/function")
    public Member functions(@RequestBody Member member){
        ReturnMember returnMember = new ReturnMember();
        returnMember.setName(member.getName());
        returnMember.setType(member.getType());
        returnMember.setStudentId(member.getStudentId());
        returnMember.setText(member.getText());
        returnMember.setProperty(member.getProperty().toString());


        log.info("name={}, studentId={}",returnMember.getName(), returnMember.getStudentId());
        memberService.save(returnMember);
        return member;
    }

}
