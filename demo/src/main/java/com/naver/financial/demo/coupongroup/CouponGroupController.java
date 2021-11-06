package com.naver.financial.demo.coupongroup;

import com.naver.financial.demo.common.GenerateResponseEntity;
import com.naver.financial.demo.domian.dto.RequestDTO;
import com.naver.financial.demo.domian.enums.GroupsStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Validated
@RestController
@RequestMapping(value = "/coupon-groups", produces = {MediaType.APPLICATION_JSON_VALUE})
public class CouponGroupController {
    private final CouponGroupService couponGroupService;
    private final GenerateResponseEntity generateResponseEntity;

    public CouponGroupController(CouponGroupService couponGroupService, GenerateResponseEntity generateResponseEntity) {
        this.couponGroupService = couponGroupService;
        this.generateResponseEntity = generateResponseEntity;
    }

    /**
     * 1. 쿠폰 그룹 생성
     */
    @PostMapping("/{code}")
    public ResponseEntity<?> createGroup(@PathVariable(value = "code")
                                             @Max(value = 50)
                                             @Min(value = 2) String code,
                                         @RequestHeader(value = "X-USER-ID") String userId,
                                         @RequestBody()RequestDTO requestDTO){
        return generateResponseEntity.generateResponseEntity(couponGroupService.saveGroup(code,userId,requestDTO));
    }


    /**
     * 2. 쿠폰 그룹 수정
     */
    @PutMapping("/{code}")
    public ResponseEntity<?> updateGroup(@PathVariable(value = "code")String code,
                                         @RequestHeader(value = "X-USER-ID") String userId,
                                         @RequestBody()RequestDTO requestDTO) {

        return generateResponseEntity.generateResponseEntity(couponGroupService.changeGroup(code,userId,requestDTO));
    }


    /**
     * 3. 쿠폰 그룹 발행
     */
    @PostMapping("/{code}/publish")
    public ResponseEntity<?> publishGroup(@PathVariable(value = "code")String code,
                                          @RequestHeader(value = "X-USER-ID") String userId){

        return generateResponseEntity.generateResponseEntity(couponGroupService.publishGroup(code,userId,GroupsStatus.PUBLISHED));
    }


    /**
     * 4. 쿠폰 그룹 비활성화
     */
    @PostMapping("/{code}/disable")
    public ResponseEntity<?> unPublishGroup(@PathVariable(value = "code")String code,
                                            @RequestHeader(value = "X-USER-ID") String userId) {
        return generateResponseEntity.generateResponseEntity(couponGroupService.publishGroup(code,userId,GroupsStatus.DISABLED));
    }
}
