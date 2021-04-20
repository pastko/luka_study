package com.example.pastko.medels;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Msgmodel {


    private boolean flag;
    private int Code;
    private String msg;

    public boolean isflag() {
        return flag;
    }
    public int getCode() {
        return Code;
    }
    public String getMsg() {
        return msg;
    }
    public void setCode(int code) {
        Code = code;
    }
    public void setflag(boolean flag) {
        this.flag = flag;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }
}
