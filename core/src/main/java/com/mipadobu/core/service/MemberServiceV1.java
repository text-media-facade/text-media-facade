package com.mipadobu.core.service;

import com.mipadobu.core.domain.Member;
import com.mipadobu.core.repository.MemberRepository;
import com.mipadobu.core.repository.MemberUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class MemberServiceV1 implements MemberService{

    private final MemberRepository memberRepository;

    @Override
    public Member save(Member member) {
        return memberRepository.save(member);
    }

    @Override
    public void update(Long memberId, MemberUpdateDto updateParam) {
        memberRepository.update(memberId, updateParam);
    }

    @Override
    public List<Member> findAll() {
        return memberRepository.findAll();
    }
}
