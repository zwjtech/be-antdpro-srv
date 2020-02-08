package com.example.antdpro.demo.controller.base;

import com.example.antdpro.demo.dto.base.ApiResult;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class ApiProxy {
    public ApiResult proxy(HttpServletRequest request, HttpServletResponse response) {
        return null;
    }
}
