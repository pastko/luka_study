package com.example.pastko.api;

import java.util.Map;
import java.util.stream.Stream;

import com.example.pastko.medels.Msgmodel;
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

    @ApiOperation(value = "msg get", notes ="msg")
    @GetMapping( value = "/msg")
    public String byresponseBody(){
        return " api test msg ";
    }

    @ApiOperation(value = "flag get", notes ="flag")
    @GetMapping( value = "/flag")
    public String byresponseflag(){
        return "flag api test msg";
    }
    // TODO: 2021-04-20 jpa , jdbc append


    @ApiOperation(value = "meta get", notes ="meta")
    @GetMapping( value = "/meta")
    @ResponseStatus(HttpStatus.OK)
    public Msgmodel byresponsemeta(@RequestParam(value = "name", defaultValue = "name") String name,
                                   @RequestHeader Map<String, String> headers ){
        Stream streambuffer = headers.values().stream();

        Msgmodel symbol  = new Msgmodel();
        symbol.setflag(true);
        symbol.setMsg(streambuffer.toString());
        symbol.setCode(200);
        return symbol;
    }


}
