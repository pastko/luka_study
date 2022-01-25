package com.naver.financial.demo.domian.entity;

import com.naver.financial.demo.domian.enums.CouponStatus;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Setter
@Getter
@Builder
@NoArgsConstructor
@Validated
@Table(name = "coupons")
public class CouponsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;           // bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,

    @NotNull
    @JoinColumn(name = "users")
    private String userid;     //    varchar(50) NOT NULL,

    @NotNull
    @Column(name = "code")
    private String code;            //  varchar(50) NOT NULL,

    @NotNull
    @Column(name = "name")
    private String name;            // varchar(50) NOT NULL,

    @NotNull
    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private CouponStatus status;          // enum('ISSUED', 'USED', 'EXPIRED') NOT NULL,

    @NotNull
    @Column(name = "amount")
    private int amount;             // int NOT NULL,
    @Column(name = "valid_from_dt")
    private Date valid_from_dt;     // datetime NOT NULL,
    @NotNull
    @Column(name = "valid_to_dt")
    private Date valid_to_dt;       // datetime NOT NULL,
    @Column(name = "used_at")
    private Date used_at;           // datetime,

    @NotNull
    @Column(name = "created_at")
    private Date created_at;        // datetime NOT NULL,
    @Column(name = "updated_at")
    private Date updated_at;        // datetime,
}
