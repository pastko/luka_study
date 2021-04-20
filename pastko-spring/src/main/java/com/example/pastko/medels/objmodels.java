package com.example.pastko.medels;

import lombok.Getter;
import lombok.Setter;
import java.util.Map;

@Getter
@Setter
public class objmodels {

    private boolean flag;
    private int Code;
    private Map<String, Object> obj;
    private String msg;

    public boolean isflag() {
        return flag;
    }
    public int getCode() {
        return Code;
    }
    public Map<String, Object> getobj() {
        return obj;
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
    public void setobj(Map<String, Object> obj) {
        this.obj = obj;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
