package com.example.antdpro.demo.controller.base;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 @author Alan Chen
 @description 拦截Ant Design Pro访问路径
 @date 2019/5/24br/>*/
@Controller
public class AntDesignController {
    /**
     配置url通配符，拦截多个地址
     @return
     */
    @RequestMapping(value = {
            "/",
            "/user",
            "/user/",
            "/user/login",
            "/console",
            "/console/",
            "/welcome"
    })
    public String fowardIndex() {
        return "index";
    }
}