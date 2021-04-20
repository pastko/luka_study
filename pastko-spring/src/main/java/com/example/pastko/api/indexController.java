package com.example.pastko.api;

import java.util.Map;
import java.util.stream.Stream;

import com.example.pastko.medels.objmodels;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@Api(tags = {"1. pastko"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api")
public class indexController {
    // TODO: 2021-04-20 jpa , jdbc append

    @ApiOperation(value = "obj get", notes ="obj")
    @GetMapping( value = "/obj")
    public String byresponseBody(){
        return " api test obj ";
    }

    @ApiOperation(value = "flag get", notes ="flag")
    @GetMapping( value = "/flag")
    public String byresponseflag(){
        return "flag api test obj";
    }


    @ApiOperation(value = "meta get", notes ="meta")
    @GetMapping( value = "/delta")
    public Map<String, Object> byresponsdelta(@RequestHeader Map<String, Object> headers) {
        return headers;
    }



    @ApiOperation(value = "meta get", notes ="meta")
    @PostMapping( value = "/meta")
    public objmodels byresponsemeta(@RequestParam(value = "name", defaultValue = "name") String name){
        objmodels symbol  = new objmodels();
        symbol.setflag(true);
        symbol.setMsg(name);
        symbol.setCode(200);
        return symbol;
    }
}
