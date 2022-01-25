package com.naver.financial.demo.domian.entity;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Validated
@Table(name="users")
public class UsersEntity {
    @Id
    private String id;        // varchar(50) NOT NULL PRIMARY KEY,

    @NotNull
    private String name;      // varchar(30) NOT NULL,

    @NotNull
    @ColumnDefault("0")
    private int point;        // int NOT NULL DEFAULT 0,

    @NotNull
    private Date created_at;  // datetime NOT NULL,
    private Date updated_at;  // datetime
}
