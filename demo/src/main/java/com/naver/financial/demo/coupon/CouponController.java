package com.naver.financial.demo.coupon;

import com.naver.financial.demo.common.GenerateResponseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/coupons")
public class CouponController {
    private final CouponService couponGroupService;
    private final GenerateResponseEntity generateResponseEntity;

    public CouponController(CouponService couponGroupService, GenerateResponseEntity generateResponseEntity) {
        this.couponGroupService = couponGroupService;
        this.generateResponseEntity = generateResponseEntity;
    }

    /**
     * 5. 쿠폰 다운로드
     */
    @PostMapping("/{code)/download")
    public ResponseEntity<?> CouponDownLoad(@PathVariable(value = "code")String code,
                                            @RequestHeader(value = "X-USER-ID")String userId){

        return generateResponseEntity.generateResponseEntity(couponGroupService.getCoupons(code,userId));
    }



    /**
     * 6. 쿠폰 사용
     */
    @PostMapping("/{code)/use")
    public ResponseEntity<?> CouponUse(@PathVariable(value = "code")String code,
                                       @RequestHeader(value = "X-USER-ID")String userId){


        return generateResponseEntity.generateResponseEntity(couponGroupService.useCoupons(code,userId));
    }

    /**
     * 7. 쿠폰 목록 조회
     */
    @GetMapping("/")
    public ResponseEntity<?> CouponList(@RequestParam(value = "page", defaultValue = "0")int page,
                                        @RequestParam(value = "size", defaultValue = "5")int size,
                                        @RequestHeader(value = "X-USER-ID")String userId){

        return generateResponseEntity.generateResponseEntity(couponGroupService.getAllCoupons(page, size));
    }
}
