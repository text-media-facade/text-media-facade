package com.mipadobu.core.service;

import com.mipadobu.core.domain.Member;
import com.mipadobu.core.repository.MemberUpdateDto;

import java.util.List;

public interface MemberService {
    Member save(Member member);
    void update(Long memberId, MemberUpdateDto updateParam);

    List<Member> findAll();
}
