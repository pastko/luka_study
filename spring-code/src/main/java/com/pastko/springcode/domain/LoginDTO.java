package com.pastko.springcode.domain;

import javax.persistence.*;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;


@Builder
@Entity
@NoArgsConstructor
public class LoginDTO {
    @Id
    private Long userId;

    @Column(unique = true)
    private String userName;

    @Column(nullable = false)
    private String userPass;

    @Temporal(TemporalType.DATE)
    private Date timestamp;
}
