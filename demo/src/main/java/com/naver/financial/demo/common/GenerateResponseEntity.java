package com.naver.financial.demo.common;

import com.naver.financial.demo.domian.dto.ResponseDTO;
import com.naver.financial.demo.domian.enums.ResponseCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class GenerateResponseEntity {

    public ResponseEntity<?> generateResponseEntity(Object data){
        if(data != null) {
            return ResponseEntity
                    .status(ResponseCode.OK.get())
                    .body(ResponseDTO
                            .builder()
                            .success(true)
                            .response(data)
                            .error(null)
                            .build());
        }else{
            return ResponseEntity
                    .status(ResponseCode.BADREQUEST.get())
                    .body(ResponseDTO
                            .builder()
                            .success(true)
                            .response(null)
                            .error(ResponseCode.BADREQUEST.getMsg())
                            .build());
        }
    }
}
