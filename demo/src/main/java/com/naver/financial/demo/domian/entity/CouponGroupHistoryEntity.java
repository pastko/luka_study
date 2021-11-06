package com.naver.financial.demo.domian.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigInteger;
import java.util.Date;


@Entity
@Setter
@Getter
@Builder
@NoArgsConstructor
@Validated
@Table(name="coupon_group_histories")
public class CouponGroupHistoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id; //            bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,

    @NotNull
    @ManyToOne
    @JoinColumn(name = "coupon_groups")
    private  CouponGroupsEntity coupon_group_id;// bigint NOT NULL,

    @NotNull
    @ManyToOne
    @JoinColumn(name = "users")
    private UsersEntity userid; // varchar(50) NOT NULL,

    @NotNull
    @Column(name = "data")
    private Date data;//          json NOT NULL,
    @NotNull
    @Column(name = "created_at")
    private Date created_at;//    datetime NOT NULL,
}
