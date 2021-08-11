package pastko.pastkospring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import pastko.pastkospring.service.MemberService;

@Controller
public class memberController {
    private final MemberService memberService;

    @Autowired
    public memberController(MemberService memberService) {
        this.memberService = memberService;
    }
}
