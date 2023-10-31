package Parsade.MediaParsade.repository.mybatis;

import Parsade.MediaParsade.domain.Member;
import Parsade.MediaParsade.domain.ReturnMember;
import Parsade.MediaParsade.repository.MemberRepository;
import Parsade.MediaParsade.repository.MemberUpdateDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


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
    public List<ReturnMember> findAll() {
        return memberMapper.findAll();
    }

}
