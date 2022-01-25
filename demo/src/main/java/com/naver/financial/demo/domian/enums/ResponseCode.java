package com.naver.financial.demo.domian.enums;

public enum ResponseCode {
        OK(200),
        BADREQUEST(400),
        FORBIDDEN(403),
        NOTFOUND(404),
        SERVEREORROR(500);


        private int values;
        ResponseCode(int values){
            this.values = values;
        }
        public int get(){
            return this.values;
        }
        public String getMsg(){
            switch (this.values){
                case 200:
                    return "OK";
                case 400:
                    return "Bad Request";

                case 403:
                    return "Forbidden";

                case 404:
                    return "Not Found";

                case 500:
                    return "Internal Server Error";
                default:
                    return "";
            }
        }
}
