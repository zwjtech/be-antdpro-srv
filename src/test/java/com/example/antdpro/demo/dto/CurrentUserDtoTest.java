package com.example.antdpro.demo.dto;


import com.example.antdpro.demo.utils.GsonUtils;
import org.junit.jupiter.api.Test;

class CurrentUserDtoTest {

    @Test
    public void buildTest(){

        String userInfo="{\n" +
                "    \"name\": \"Serati Ma\",\n" +
                "    \"avatar\": \"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png\",\n" +
                "    \"userid\": \"00000001\",\n" +
                "    \"email\": \"antdesign@alipay.com\",\n" +
                "    \"signature\": \"海纳百川，有容乃大\",\n" +
                "    \"title\": \"交互专家\",\n" +
                "    \"group\": \"蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED\",\n" +
                "    \"tags\": [\n" +
                "        {\n" +
                "            \"key\": \"0\",\n" +
                "            \"label\": \"很有想法的\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"key\": \"1\",\n" +
                "            \"label\": \"专注设计\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"key\": \"2\",\n" +
                "            \"label\": \"辣~\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"key\": \"3\",\n" +
                "            \"label\": \"大长腿\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"key\": \"4\",\n" +
                "            \"label\": \"川妹子\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"key\": \"5\",\n" +
                "            \"label\": \"海纳百川\"\n" +
                "        }\n" +
                "    ],\n" +
                "    \"notifyCount\": 12,\n" +
                "    \"unreadCount\": 11,\n" +
                "    \"country\": \"China\",\n" +
                "    \"geographic\": {\n" +
                "        \"province\": {\n" +
                "            \"label\": \"浙江省\",\n" +
                "            \"key\": \"330000\"\n" +
                "        },\n" +
                "        \"city\": {\n" +
                "            \"label\": \"杭州市\",\n" +
                "            \"key\": \"330100\"\n" +
                "        }\n" +
                "    },\n" +
                "    \"address\": \"西湖区工专路 77 号\",\n" +
                "    \"phone\": \"0752-268888888\"\n" +
                "}";

        CurrentUserDto currentUserDto = GsonUtils.toGson(userInfo, CurrentUserDto.class);
        System.out.println(currentUserDto);
    }

}