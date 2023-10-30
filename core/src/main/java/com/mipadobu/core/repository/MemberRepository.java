package com.mipadobu.core.repository;

import com.mipadobu.core.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);

    void update(Long memberId, MemberUpdateDto updateParam);

    List<Member> findAll();
    // 여기에서 추가적인 메소드를 정의할 수 있음
}