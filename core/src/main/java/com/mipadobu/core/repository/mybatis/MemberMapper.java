package com.mipadobu.core.repository.mybatis;


import com.mipadobu.core.domain.Member;
import com.mipadobu.core.repository.MemberUpdateDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MemberMapper {
    void save(Member member);

    void update(@Param("id") Long id, @Param("updateParam")
    MemberUpdateDto updateParam);

    List<Member> findAll();

}
