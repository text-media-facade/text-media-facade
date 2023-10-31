package Parsade.MediaParsade.service;

import Parsade.MediaParsade.domain.Member;
import Parsade.MediaParsade.repository.MemberRepository;
import Parsade.MediaParsade.repository.MemberUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


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
