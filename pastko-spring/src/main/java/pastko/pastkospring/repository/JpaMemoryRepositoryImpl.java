package pastko.pastkospring.repository;

import pastko.pastkospring.domain.Member;

import java.util.List;
import java.util.Optional;

public class JpaMemoryRepositoryImpl implements MemoryRepository {
    @Override
    public Member save(Member member) {
        return null;
    }

    @Override
    public Optional<Member> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Optional<Member> findByName(String name) {
        return Optional.empty();
    }

    @Override
    public List<Member> findAll() {
        return null;
    }
}
