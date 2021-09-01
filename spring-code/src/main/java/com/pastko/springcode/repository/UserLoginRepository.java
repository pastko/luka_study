package com.pastko.springcode.repository;

import com.pastko.springcode.domain.LoginDTO;

import java.util.*;

public class UserLoginRepository implements LoginRepository{
    private static Map<Long, LoginDTO> LoginUserList = new HashMap<>();
    private Long memberId = 0L;

    @Override
    public Long save(LoginDTO userinfo) {
        LoginDTO loginMember = new LoginDTO();
        loginMember.setUserId(++memberId);
        loginMember.setUserName(userinfo.getUserName());
        loginMember.setUserPass((userinfo.getUserPass()));
        LoginUserList.put(loginMember.getUserId(),loginMember);
        return loginMember.getUserId();
    }

    @Override
    public Optional<LoginDTO> findById(Long id) {
        return Optional.ofNullable(LoginUserList.get(id));
    }

    @Override
    public Optional<LoginDTO> findByName(String username) {
        return LoginUserList.values().stream().filter(e->e.getUserName().equals(username)).findAny();
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
