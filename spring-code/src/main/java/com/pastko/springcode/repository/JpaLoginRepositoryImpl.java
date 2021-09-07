package com.pastko.springcode.repository;

import com.pastko.springcode.Entitiy.UserList;
import com.pastko.springcode.domain.LoginDTO;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class JpaLoginRepositoryImpl implements LoginRepository {
    private final EntityManager em;

    public JpaLoginRepositoryImpl(EntityManager em) {
        this.em = em;
    }

    @Override
    public Long save(LoginDTO member) {
        this.em.persist(member);
        this.em.close();

        return null;
    }

    @Override
    public Optional<LoginDTO> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Optional<LoginDTO> findByName(String username) {
        return Optional.empty();
    }

    @Override
    public List<LoginDTO> findAll() {
        return null;
    }

    @Override
    public Long DeleteLoginList(String username) {
        return null;
    }
}
