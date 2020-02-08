package com.example.antdpro.demo.utils;

import com.example.antdpro.demo.dto.geographic.CityDto;
import com.example.antdpro.demo.dto.geographic.ProvinceDto;
import com.example.antdpro.demo.dto.table.TablePageNationDataDto;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static com.example.antdpro.demo.utils.ConstantHelper.*;

class CacheMapTest {
    @Test
    public void test(){
        List<ProvinceDto> list = (List<ProvinceDto>) CacheMap.map.get(PROVINCE_KEY);

        Map<String, List<CityDto>> map = (Map<String, List<CityDto>>) CacheMap.map.get(CITY_KEY);

        TablePageNationDataDto dataDto =(TablePageNationDataDto) CacheMap.map.get(TABLE_PAGE);
        System.out.println("test");
    }
}