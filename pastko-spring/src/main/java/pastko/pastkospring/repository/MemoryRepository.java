package pastko.pastkospring.repository;

import pastko.pastkospring.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemoryRepository {
    Member save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
}
