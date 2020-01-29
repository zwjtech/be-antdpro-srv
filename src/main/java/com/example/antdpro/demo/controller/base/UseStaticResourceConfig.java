package com.example.antdpro.demo.controller.base;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class UseStaticResourceConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //需要配置一下，让js、css等静态资源去static目录下去加载
        registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
    }
}
