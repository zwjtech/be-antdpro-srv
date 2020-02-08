package com.example.antdpro.demo.controller.base;

import com.example.antdpro.demo.dto.base.ApiResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 @author Alan Chen
 @description 拦截Ant Design Pro访问路径
 @date 2019/5/24br
 */
@Controller
public class AntDesignController {

    @Resource
    private ApiProxy apiProxy;

    /**
     * /api/路径都会路由到代理
     * @param request
     * @param response
     * @return
     */
    @RequestMapping("/api/**")
    public ApiResult api(HttpServletRequest request, HttpServletResponse response){
        return apiProxy.proxy(request, response);
    }

    /**
     * 除了/api/**以外的路径都来到此
     * @return
     */
    @RequestMapping(value="/**", method= RequestMethod.GET)
    public String index(){
        return "index";
    }
}