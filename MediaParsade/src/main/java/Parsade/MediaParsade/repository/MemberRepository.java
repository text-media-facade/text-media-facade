package Parsade.MediaParsade.repository;

import Parsade.MediaParsade.domain.Member;
import Parsade.MediaParsade.domain.ReturnMember;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {

    Member save(Member member);

    void update(Long memberId, MemberUpdateDto updateParam);

    List<ReturnMember> findAll();




}
