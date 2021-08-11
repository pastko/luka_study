package pastko.pastkospring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pastko.pastkospring.repository.MemoryMemberRepository;
import pastko.pastkospring.service.MemberService;

@Configuration
public class SpringConfig {

    @Bean
    public MemberService MemberService(){
        return new MemberService(memberRepository());
    }

    @Bean
    public MemoryMemberRepository memberRepository(){
        return new MemoryMemberRepository();
    }

}


