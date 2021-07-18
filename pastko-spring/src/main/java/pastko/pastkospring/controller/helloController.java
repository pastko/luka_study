package pastko.pastkospring.controller;

import lombok.experimental.PackagePrivate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class helloController {
    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data","hello!");
        return "hello";
    }
    @PackagePrivate("hello-MVC")
    public String helloMVC(@RequestParam("name") String Name,Model model){
        model.addAttribute()
        return "mvc";
    }
}
