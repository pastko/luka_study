package pastko.pastkospring.repository;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import pastko.pastkospring.domain.Member;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

public class MemoryMeberRepositoryTest {
    MemoryMemberRepository repository = new MemoryMemberRepository();
    @AfterEach
    public void afterEach(){
        repository.clearStore();
    }

    @Test
    public void save(){
        Member member = new Member();
        member.setName("spring");

        repository.save((member));
        Member result = repository.findById(member.getId()).get();
        //System.out.println("result"  + (result == member));
        Assertions.assertEquals(member, result);
        assertThat(member).isEqualTo(result);
    }

    @Test
    public void findByName() {
        Member member1 = new Member();
        member1.setName("spring1");
        repository.save((member1));

        Member member2 = new Member();
        member2.setName("spring2");
        repository.save((member2));

        Member result =  repository.findByName("spring1").get();
        assertThat(result).isEqualTo(member1);
    }

    @Test
    public void findAll(){
        Member member1 = new Member();
        member1.setName("spring1");
        repository.save((member1));

        Member member2 = new Member();
        member2.setName("spring2");
        repository.save((member2));

        List<Member> res = repository.findAll();

        assertThat(res.size()).isEqualTo(2);
    }
}
