package com.naver.financial.demo.coupongroup;

import com.naver.financial.demo.domian.dto.ResponseDTO;
import com.naver.financial.demo.domian.entity.CouponGroupsEntity;
import com.naver.financial.demo.domian.enums.GroupsStatus;
import com.naver.financial.demo.domian.dto.RequestDTO;
import com.naver.financial.demo.domian.enums.ResponseCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CouponGroupService {
    private final CouponGroupRepository couponGroupRepository;

    public CouponGroupService(CouponGroupRepository couponGroupRepository) {
        this.couponGroupRepository = couponGroupRepository;
    }


    public CouponGroupsEntity saveGroup(String code, String userId ,RequestDTO requestDTO){
        if(couponGroupRepository.FindCouponGroup(code).get() == null) {
            couponGroupRepository.InsertCouponGroup(code,userId,requestDTO);
            return couponGroupRepository.FindCouponGroup(code).get();
        }else {
            return null;
        }
    }

    public CouponGroupsEntity changeGroup(String code, String userId, RequestDTO requestDTO){
        CouponGroupsEntity groupsEntity = couponGroupRepository.FindCouponGroup(code).get();

        if(groupsEntity != null &&
                groupsEntity.getIssuer_id().equals(userId) &&
                groupsEntity.getStatus().equals(GroupsStatus.CREATED)) {

                couponGroupRepository.UpdateCouponGroup(code, requestDTO);
                return couponGroupRepository.FindCouponGroup(code).get();
        }else{
            return null;
        }
    }


    public CouponGroupsEntity publishGroup(String code,String userId, GroupsStatus groupsStatus){
        CouponGroupsEntity groupsEntity = couponGroupRepository.FindCouponGroup(code).get();

        if(groupsEntity != null &&
                groupsEntity.getIssuer_id().equals(userId) &&
                groupsEntity.getStatus().equals(GroupsStatus.CREATED)) {
            return couponGroupRepository.UpdateCouponGroupStatus(code, groupsStatus).get();
        }else{
            return null;
        }
    }

}
