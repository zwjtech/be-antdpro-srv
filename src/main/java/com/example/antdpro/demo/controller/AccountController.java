package com.example.antdpro.demo.controller;

import com.example.antdpro.demo.dto.*;
import com.example.antdpro.demo.dto.chart.AnalytisDataDto;
import com.example.antdpro.demo.dto.geographic.CityDto;
import com.example.antdpro.demo.dto.geographic.ProvinceDto;
import com.example.antdpro.demo.dto.table.Pagination;
import com.example.antdpro.demo.dto.table.RowDataDto;
import com.example.antdpro.demo.dto.table.SubmitResultDto;
import com.example.antdpro.demo.dto.table.TablePageNationDataDto;
import com.example.antdpro.demo.service.AccountService;
import com.example.antdpro.demo.utils.CacheMap;
import com.example.antdpro.demo.utils.ConstantHelper;
import com.example.antdpro.demo.utils.GsonUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.logging.ConsoleHandler;

import static com.example.antdpro.demo.utils.ConstantHelper.*;

@Controller
@RequestMapping("/api")
public class AccountController {

    private Log logger = LogFactory.getLog(this.getClass());

    @Resource
    private AccountService accountService;

    @ResponseBody
    @RequestMapping(value = "/login/account", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public LoginResultDto login(@RequestBody(required = false) LoginDto loginDto,
                                BindingResult bindingResult) {
        System.out.println(loginDto.toString());
        return new LoginResultDto("ok", "account", "admin");
    }

    @ResponseBody
    @RequestMapping(value = "/currentUser", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public CurrentUserDto currentUser() {
        CurrentUserDto currentUserDto = GsonUtils.toGson(ConstantHelper.userInfo, CurrentUserDto.class);
        return currentUserDto;
    }

    @ResponseBody
    @RequestMapping(value = "/register", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public RegisterResultDto register(@RequestBody(required = false) RegisterDto registerDto,
                                      BindingResult bindingResult) {
        logger.info(registerDto.toString());
        String result = "{\n" +
                "    \"status\": \"ok\",\n" +
                "    \"currentAuthority\": \"user\"\n" +
                "}";
        logger.info(result);
        return GsonUtils.toGson(result,RegisterResultDto.class);
    }

    @ResponseBody
    @RequestMapping(value = "/geographic/province", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ProvinceDto> getProvinces() {
        logger.info("start com.example.antdpro.demo.controller.AccountController.getProvinces");
        String result = "{\n" +
                "    \"status\": \"ok\",\n" +
                "    \"currentAuthority\": \"user\"\n" +
                "}";
        logger.info(result);
        return (List<ProvinceDto>) CacheMap.map.get(PROVINCE_KEY);
    }

    @ResponseBody
    @RequestMapping(value = "/geographic/city/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CityDto> getCitys(@PathVariable("id") String id) {
        logger.info(String.format("start com.example.antdpro.demo.controller.AccountController.getCitys,id[%s]",id));
        Map<String, List<CityDto>> cityMap = (Map<String, List<CityDto>>) CacheMap.map.get(CITY_KEY);
        return cityMap.get(id);
    }

    @ResponseBody
    @RequestMapping(value = "/fake_chart_data", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String fake_chart_data() {
        return ConstantHelper.analytisFakeData;
    }
    @ResponseBody
    @RequestMapping(value = "/profile/basic", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public String basic() {
        return ConstantHelper.basic;
    }

    @ResponseBody
    @RequestMapping(value = "/rule", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public SubmitResultDto submitRule(@RequestBody(required = true) String desc) {
        logger.info(String.format("req str %s",desc));
        TablePageNationDataDto dataDto = (TablePageNationDataDto)CacheMap.map.get(TABLE_PAGE);
        RowDataDto dto = RowDataDto.build(desc);
        dataDto.getData().add(dto);
        dataDto.setTotal(dataDto.getTotal()+1);

        SubmitResultDto submitResultDto = new SubmitResultDto();
        submitResultDto.setList(dataDto.getData());
        submitResultDto.setPagination(new Pagination(dataDto.getTotal()));
        return submitResultDto;
    }

    @ResponseBody
    @RequestMapping(value = "/rule", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public TablePageNationDataDto queryRules(@RequestParam(value="current",required = true,defaultValue = "1") Long current,
                             @RequestParam(value="pageSize",required = true,defaultValue = "10") Long pageSize,
                             @RequestParam(value="name",required = false,defaultValue = "") String name,
                             @RequestParam(value="desc",required = false,defaultValue = "") String desc,
                             @RequestParam(value="callNo",required = false,defaultValue = "") Long callNo,
                             @RequestParam(value="status",required = false,defaultValue = "") Long status,
                             @RequestParam(value="updatedAt",required = false,defaultValue = "") String updatedAt) {
        logger.info(String.format("current:%s,pageSize:%s,name:%s,desc:%s,callNo:%s,status:%s,updatedAt:%s",current,pageSize,name,desc,callNo,status,updatedAt));

        return accountService.queryRules(current,pageSize,name,desc,callNo,status,updatedAt);
    }


}
