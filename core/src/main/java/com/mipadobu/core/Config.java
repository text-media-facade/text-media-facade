package com.mipadobu.core;

import com.mipadobu.core.repository.MemberRepository;
import com.mipadobu.core.repository.mybatis.MemberMapper;
import com.mipadobu.core.repository.mybatis.MyBatisMemberRepository;
import com.mipadobu.core.service.MemberService;
import com.mipadobu.core.service.MemberServiceV1;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class Config {

    private final MemberMapper memberMapper;

    @Bean
    public MemberService memberService(){
        return new MemberServiceV1(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository(){
        return new MyBatisMemberRepository(memberMapper);
    }


}