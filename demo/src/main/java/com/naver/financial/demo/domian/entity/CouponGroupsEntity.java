package com.naver.financial.demo.domian.entity;

import com.naver.financial.demo.domian.enums.GroupsStatus;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
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
@Table(name="coupon_groups")
public class CouponGroupsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id; //            bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,

    @NotNull
    @Column(name = "issuer_id")
    private String issuer_id; //     varchar(50) NOT NULL,

    @NotNull
    @Column(name = "code")
    private String code;            //  varchar(50) NOT NULL,

    @NotNull
    @Column(name = "name")
    private String name;            // varchar(50) NOT NULL,


    @NotNull
    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private GroupsStatus status;          // enum('CREATED', 'PUBLISHED', 'DISABLED') NOT NULL,

    @NotNull
    @Column(name = "amount")
    private int amount;             // int NOT NULL,

    @NotNull
    @Column(name = "max_count")
    private int max_count; //     int NOT NULL,

    @NotNull
    @Column(name = "current_count")
    @ColumnDefault("0")
    private int current_count;// int NOT NULL DEFAULT 0,

    @Column(name = "valid_from_dt")
    private Date valid_from_dt;     // datetime NOT NULL,
    @NotNull
    @Column(name = "valid_to_dt")
    private Date valid_to_dt;       // datetime NOT NULL,

    @NotNull
    @Column(name = "created_at")
    private Date created_at; //   datetime NOT NULL,
    @Column(name = "created_at")
    private Date updated_at;  //   datetime,
}
