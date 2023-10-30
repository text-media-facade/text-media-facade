package com.mipadobu.core.repository.mybatis;

import com.mipadobu.core.domain.Member;
import com.mipadobu.core.repository.MemberRepository;
import com.mipadobu.core.repository.MemberUpdateDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;

@Slf4j
@Repository
@RequiredArgsConstructor
public class MyBatisMemberRepository implements MemberRepository {

    private final MemberMapper memberMapper;

    @Override
    public Member save(Member member) {
        memberMapper.save(member);
        return member;
    }

    @Override
    public void update(Long memberId, MemberUpdateDto updateParam) {
        memberMapper.update(memberId, updateParam);
    }


    @Override
    public List<Member> findAll() {
        return memberMapper.findAll();
    }

}
