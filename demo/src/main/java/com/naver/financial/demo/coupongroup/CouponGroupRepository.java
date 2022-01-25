package com.naver.financial.demo.coupongroup;

import com.naver.financial.demo.domian.entity.CouponGroupsEntity;
import com.naver.financial.demo.domian.enums.GroupsStatus;
import com.naver.financial.demo.domian.dto.RequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;


@Repository
public class CouponGroupRepository {
    private final EntityManager entityManager;
    private SimpleDateFormat formatter;
    @Autowired
    public CouponGroupRepository(EntityManager entityManager){
        this.entityManager = entityManager;
        this.formatter = new SimpleDateFormat("yyyy-MM-ddTHH:mm:ss z");
    }

    public Optional<CouponGroupsEntity> FindCouponGroup(String code){
        return entityManager
                .createQuery("select cg from CouponGroupsEntity as cg where cg.code=?1",CouponGroupsEntity.class)
                .setParameter(1,code)
                .getResultList().stream().findFirst();
    }

    @Transactional
    public Boolean InsertCouponGroup(String code, String userId, RequestDTO requestDTO){
        try {
            Date date = new Date(System.currentTimeMillis());
            entityManager.persist(CouponGroupsEntity.builder()
                    .code(code)
                    .issuer_id(userId)
                    .name(requestDTO.getName())
                    .amount(requestDTO.getAmount())
                    .status(GroupsStatus.CREATED)
                    .max_count(requestDTO.getMax_count())
                    .valid_from_dt(formatter.parse(requestDTO.getValid_from_dt()))
                    .valid_to_dt(formatter.parse(requestDTO.getValid_to_dt()))
                    .created_at(formatter.parse(formatter.format(date)))
                    .updated_at(formatter.parse(formatter.format(date)))
                    .build());
            entityManager.flush();
            return true;
        }catch (ParseException e){
            e.printStackTrace();
            return false;
        }
    }

    @Transactional
    public Boolean UpdateCouponGroup(String code, RequestDTO requestDTO){
        CouponGroupsEntity couponGroupsEntity = entityManager
                .createQuery("select cg from CouponGroupsEntity as cg where cg.code=?1",CouponGroupsEntity.class)
                .setParameter(1,code)
                .getResultList().stream().findFirst().get();



        couponGroupsEntity.setName(requestDTO.getName());
        couponGroupsEntity.setAmount(requestDTO.getAmount());
        couponGroupsEntity.setMax_count(requestDTO.getMax_count());
        try {
            couponGroupsEntity.setValid_from_dt(formatter.parse(requestDTO.getValid_from_dt()));
            couponGroupsEntity.setValid_to_dt(formatter.parse(requestDTO.getValid_to_dt()));
        } catch (ParseException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @Transactional
    public Boolean UpdateCoupon(String code, RequestDTO requestDTO){
        CouponGroupsEntity couponGroupsEntity = entityManager
                .createQuery("select cg from CouponGroupsEntity as cg where cg.code=?1",CouponGroupsEntity.class)
                .setParameter(1,code)
                .getResultList().stream().findFirst().get();



        couponGroupsEntity.setName(requestDTO.getName());
        couponGroupsEntity.setAmount(requestDTO.getAmount());
        couponGroupsEntity.setMax_count(requestDTO.getMax_count());
        try {
            couponGroupsEntity.setValid_from_dt(formatter.parse(requestDTO.getValid_from_dt()));
            couponGroupsEntity.setValid_to_dt(formatter.parse(requestDTO.getValid_to_dt()));
        } catch (ParseException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }


    @Transactional
    public Optional<CouponGroupsEntity> UpdateCouponGroupStatus(String code, GroupsStatus status){
        CouponGroupsEntity couponGroupsEntity = entityManager
                .createQuery("select cg from CouponGroupsEntity as cg where cg.code=?1",CouponGroupsEntity.class)
                .setParameter(1,code)
                .getResultList().stream().findFirst().get();
        couponGroupsEntity.setStatus(status);

        return Optional.of(couponGroupsEntity);
    }


}
