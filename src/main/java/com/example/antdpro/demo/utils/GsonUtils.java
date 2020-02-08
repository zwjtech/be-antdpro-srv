package com.example.antdpro.demo.utils;

import com.google.gson.GsonBuilder;

import java.lang.reflect.Type;

public class GsonUtils {

    public static  <T> T toGson(String json, Class<T> type){
        return new GsonBuilder().create().fromJson(json,type);
    }

    public static  <T> T toGson(String json, Type type){
        return new GsonBuilder().create().fromJson(json,type);
    }

}
