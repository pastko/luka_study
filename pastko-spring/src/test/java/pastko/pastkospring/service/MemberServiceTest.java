package pastko.pastkospring.service;

import org.apache.juli.logging.Log;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import pastko.pastkospring.domain.Member;

import static org.assertj.core.api.Assertions.*;

class MemberServiceTest {
    MemberService memberService = new MemberService();

    @Test
    void join() {
        Member member = new Member();
        member.setName("hello");

        Long saveId = memberService.join(member);

        Member findMember = memberService.findOne(saveId).get();
        assertThat(findMember).isEqualTo(member);
    }

    @Test
    void 중복회원검사(){
        Member member1 = new Member();
        member1.setName("spring");


    }

    @Test
    void findMember() {

    }
}