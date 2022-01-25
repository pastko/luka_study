package com.naver.financial.demo.coupon;

import com.naver.financial.demo.coupongroup.CouponGroupRepository;
import com.naver.financial.demo.domian.entity.CouponGroupsEntity;
import com.naver.financial.demo.domian.entity.CouponsEntity;
import com.naver.financial.demo.domian.enums.CouponStatus;
import com.naver.financial.demo.domian.enums.GroupsStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CouponService {
    private final CouponGroupRepository couponGroupRepository;
    private final CouponRepository couponRepository;

    public CouponService(CouponGroupRepository couponGroupRepository, CouponRepository couponRepository) {
        this.couponGroupRepository = couponGroupRepository;
        this.couponRepository = couponRepository;
    }

    public CouponsEntity getCoupons(String code, String userId){
        CouponGroupsEntity groupsEntity = couponGroupRepository.FindCouponGroup(code).get();
        // TODO : 만료 확인
        if(groupsEntity != null &&
                groupsEntity.getIssuer_id().equals(userId) &&
                groupsEntity.getStatus().equals(GroupsStatus.PUBLISHED)) {
            couponRepository.InsertCoupons(userId,groupsEntity);
            //TODO : 쿠폰 전체 값 감소
            
            return couponRepository.FindCoupon(code).get();
        }else{
            return null;
        }
    }


    public CouponsEntity useCoupons(String code,String userId){
        CouponsEntity couponsEntity = couponRepository.FindCoupon(code).get();
        if(couponsEntity != null &&
                couponsEntity.getUserid().equals(userId) &&
                couponsEntity.getStatus().equals(CouponStatus.ISSUED)) {
            couponRepository.UpdateCoupons(userId,CouponStatus.USED);
            //TODO : 쿠폰 전체 값 감소

            return couponRepository.FindCoupon(code).get();
        }else{
            return null;
        }
    }

    public List<CouponsEntity> getAllCoupons(int page, int size){
        return couponRepository.FindAllCoupons(page,size);
    }
}
