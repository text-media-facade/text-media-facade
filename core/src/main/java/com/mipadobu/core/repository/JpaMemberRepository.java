package com.mipadobu.core.repository;

import com.mipadobu.core.domain.Member;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

public class JpaMemberRepository implements MemberRepository {

    private final EntityManager em;

    public JpaMemberRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Member save(Member member) {
        em.persist(member);
        return member;
    }

    @Override
    public void update(Long memberId, MemberUpdateDto updateParam) {

    }
    @Override
    public List<Member> findAll() {
        return  em.createQuery("select m from Member m", Member.class)
                .getResultList();
    }

}
