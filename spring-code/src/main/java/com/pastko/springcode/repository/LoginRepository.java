package com.pastko.springcode.repository;

import com.pastko.springcode.domain.LoginDTO;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface LoginRepository {
    Long save(LoginDTO member);
    Optional<LoginDTO> findById(Long id);
    Optional<LoginDTO> findByName(String username);
    List<LoginDTO> findAll();
    Long DeleteLoginList(String username);
}
