package com.naver.financial.demo.coupon;


import com.naver.financial.demo.domian.entity.CouponGroupsEntity;
import com.naver.financial.demo.domian.entity.CouponsEntity;
import com.naver.financial.demo.domian.enums.CouponStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

@Repository
public class CouponRepository {
    private final EntityManager entityManager;
    private SimpleDateFormat formatter;
    @Autowired
    public CouponRepository(EntityManager entityManager){
        this.entityManager = entityManager;
        this.formatter = new SimpleDateFormat("yyyy-MM-ddTHH:mm:ss z");
    }

    public Optional<CouponsEntity> FindCoupon(String code){
        return entityManager
                .createQuery("select cp from CouponsEntity as cp where cp.code=?1", CouponsEntity.class)
                .setParameter(1,code)
                .getResultList().stream().findFirst();
    }

    @Transactional
    public Boolean InsertCoupons(String userId, CouponGroupsEntity couponGroups){
        try {
            entityManager.persist(CouponsEntity.builder()
                    .userid(userId)
                    .code(couponGroups.getCode())
                    .name(couponGroups.getName())
                    .amount(couponGroups.getAmount())
                    .status(CouponStatus.ISSUED)
                    .valid_from_dt(couponGroups.getValid_from_dt())
                    .valid_to_dt(couponGroups.getValid_to_dt())
                    .created_at(couponGroups.getCreated_at())
                    .updated_at(couponGroups.getUpdated_at())
                    .build());
            entityManager.flush();
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Transactional
    public Optional<CouponsEntity> UpdateCoupons(String code, CouponStatus status){
        CouponsEntity couponsEntity = entityManager
                .createQuery("select cp from CouponsEntity as cp where cp.code=?1",CouponsEntity.class)
                .setParameter(1,code)
                .getResultList().stream().findFirst().get();
        couponsEntity.setStatus(status);


        return Optional.of(couponsEntity);
    }

    public List<CouponsEntity> FindAllCoupons(int page, int size){
        return entityManager.createQuery("select cp from CouponsEntity as cp",CouponsEntity.class)
                .setFirstResult(page)
                .setMaxResults(size)
                .getResultList();

    }
}
