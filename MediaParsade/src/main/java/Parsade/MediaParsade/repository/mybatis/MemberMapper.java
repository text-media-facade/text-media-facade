package Parsade.MediaParsade.repository.mybatis;


import Parsade.MediaParsade.domain.Member;
import Parsade.MediaParsade.domain.ReturnMember;
import Parsade.MediaParsade.repository.MemberUpdateDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MemberMapper {
    void save(Member member);

    void update(@Param("id") Long id, @Param("updateParam")
    MemberUpdateDto updateParam);


    List<ReturnMember> findAll();

}
