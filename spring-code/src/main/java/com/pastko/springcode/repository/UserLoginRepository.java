package com.pastko.springcode.repository;

import com.pastko.springcode.domain.LoginDTO;

import java.util.*;

public class UserLoginRepository implements LoginRepository{
    private static Map<Long, LoginDTO> LoginUserList = new HashMap<>();
    private Long memberId = 0L;

    @Override
    public Long save(LoginDTO userinfo) {
      return null;
    }

    @Override
    public Optional<LoginDTO> findById(Long id) {
        return Optional.ofNullable(LoginUserList.get(id));
    }

    @Override
    public Optional<LoginDTO> findByName(String username) {
        return null;
    }

    @Override
    public List<LoginDTO> findAll() {
        return new ArrayList<>(LoginUserList.values());
    }

    @Override
    public Long DeleteLoginList(String username) {
        if(LoginUserList.containsValue(username))
        {
            return null;
        }
        else {
            return null;
        }
    }


    public void clearStore() {
        LoginUserList.clear();
    }
}
