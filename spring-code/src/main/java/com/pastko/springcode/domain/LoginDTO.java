package com.pastko.springcode.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDTO {
    private Long userId;
    private String userName;
    private String userPass;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPass() {
        return userPass;
    }

    public void setUserPass(String userPass) {
        this.userPass = userPass;
    }
}
