package com.pastko.springcode.Entitiy;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor
public class UserList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String userName;

    @Column(nullable = false)
    private String userPass;

    @Column(length = 300)
    private String info;

    @Temporal(TemporalType.DATE)
    private Date timeStamp;


}
