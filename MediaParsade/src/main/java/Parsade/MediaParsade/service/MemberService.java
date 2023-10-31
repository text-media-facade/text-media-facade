package Parsade.MediaParsade.service;

import Parsade.MediaParsade.domain.Member;
import Parsade.MediaParsade.domain.ReturnMember;
import Parsade.MediaParsade.repository.MemberUpdateDto;

import java.util.List;
import java.util.Optional;

public interface MemberService {

    Member save(Member member);
    void update(Long memberId, MemberUpdateDto updateParam);

    List<ReturnMember> findAll();

}
