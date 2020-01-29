package com.example.antdpro.demo.utils;

import com.google.gson.GsonBuilder;

public class GsonUtils {

    public static  <T> T toGson(String json, Class<T> type){
        return new GsonBuilder().create().fromJson(json,type);
    }

}
