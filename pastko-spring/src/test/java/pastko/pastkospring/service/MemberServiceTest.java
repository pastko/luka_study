package pastko.pastkospring.service;

import org.apache.juli.logging.Log;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import pastko.pastkospring.domain.Member;
import pastko.pastkospring.repository.MemoryMemberRepository;
import pastko.pastkospring.repository.MemoryRepository;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

class MemberServiceTest {
    MemberService memberService;
    MemoryMemberRepository memoryRepository;
    @BeforeEach
    public  void beforeEach(){
        memoryRepository = new MemoryMemberRepository();
        memberService    = new MemberService(memoryRepository);
    }

    @AfterEach
    public void afterEach(){
        memoryRepository.clearStore();
    }

    @Test
    void join() {
        Member member = new Member();
        member.setName("spring");

        Long saveId = memberService.join(member);

        Member findMember = memberService.findOne(saveId).get();
        assertThat(findMember).isEqualTo(member);
    }

    @Test
    void 중복회원검사(){
        Member member1 = new Member();
        member1.setName("spring");

        Member member2 = new Member();
        member2.setName("spring");


        memberService.join(member1);

        // 1st 방법
//        assertThrows(IllegalStateException.class, ()->memberService.join(member2));
        IllegalStateException e = assertThrows(IllegalStateException.class, ()->memberService.join(member2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");

        // 2st 방법
//        try {
//            memberService.join(member2);
//            fail("");
//        }catch (IllegalStateException e)
//        {
//            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
//        }

    }

    @Test
    void findMember() {

    }
}