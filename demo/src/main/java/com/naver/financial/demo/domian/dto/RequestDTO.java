package com.naver.financial.demo.domian.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Getter
@Setter
@Builder
@Validated
public class RequestDTO {
    @Size(min =2,max= 50)
    private String name;
    @Min(1)
    private int amount;
    @Min(1)
    private int max_count;

    private String valid_from_dt;
    private String valid_to_dt;
}
