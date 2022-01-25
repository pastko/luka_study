package com.naver.financial.demo.domian.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
@Builder
public class ResponseDTO {
    /**
     sucesss - 성공여부
     response - 성공 응답 내용
     error   - 에러 응답 내용
     */
    private Boolean success;
    private Object response;
    private Object error;


}