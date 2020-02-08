package com.example.antdpro.demo.utils;

import com.example.antdpro.demo.dto.geographic.CityDto;
import com.example.antdpro.demo.dto.geographic.ProvinceDto;
import com.example.antdpro.demo.dto.table.TablePageNationDataDto;
import com.google.gson.reflect.TypeToken;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static com.example.antdpro.demo.utils.ConstantHelper.*;

public class CacheMap {

    public static ConcurrentHashMap<String, Object> map = new ConcurrentHashMap<String, Object>();
    static {
        map.put(PROVINCE_KEY, GsonUtils.toGson(PROVINCES,new TypeToken<List<ProvinceDto>>(){}.getType()));
        map.put(CITY_KEY,GsonUtils.toGson(CITYS,new TypeToken<Map<String, List<CityDto>>>(){}.getType()));
        map.put(TABLE_PAGE,GsonUtils.toGson(tablePageData, TablePageNationDataDto.class));
    }
}
