package pastko.repository;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import pastko.pastkospring.domain.Member;
import pastko.pastkospring.repository.MemoryMemberRepository;

public class MemoryMeberRepositoryTest {
    MemoryMemberRepository repository = new MemoryMemberRepository();

    @Test
    public void save(){
        Member member = new Member();
        member.setName("spring");

        repository.save((member));
        Member result = repository.findById(member.getId()).get();
        //System.out.println("result"  + (result == member));
        Assertions.assertEquals(member, result);
    }
}
