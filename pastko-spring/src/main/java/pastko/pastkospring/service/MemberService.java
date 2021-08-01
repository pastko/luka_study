package pastko.pastkospring.service;

import pastko.pastkospring.domain.Member;
import pastko.pastkospring.repository.MemoryMemberRepository;
import pastko.pastkospring.repository.MemoryRepository;

import java.util.List;
import java.util.Optional;


public class MemberService {
    private final MemoryMemberRepository memberRepository;

    public MemberService(MemoryMemberRepository isMemoryRepository) {
        this.memberRepository = isMemoryRepository;
    }

    /**
     * 회원가입
     *
     *
     * @param member
     * @return member.getID
     */
    public Long join(Member member)
    {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName())
                .ifPresent(m->{
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    /**
     *
     * 전체 회원 조회
     *
     * @return
     */
    public List<Member> findMember(){
        return memberRepository.findAll();
    }


    /**
     * 아이디 회원 조회
     *
     * @param memberId
     * @return find by id Member
     */
    public Optional<Member> findOne(Long memberId)
    {
        return memberRepository.findById(memberId);
    }

}
