package com.example.antdpro.demo.service;

import com.example.antdpro.demo.dto.table.RowDataDto;
import com.example.antdpro.demo.dto.table.TablePageNationDataDto;
import com.example.antdpro.demo.utils.CacheMap;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.example.antdpro.demo.utils.ConstantHelper.TABLE_PAGE;

@Service
public class AccountService {
    public TablePageNationDataDto queryRules(Long current,
                                            Long pageSize,
                                            String name,
                                             String desc,
                                             Long callNo,
                                             Long status,
                                            String updatedAt){
        TablePageNationDataDto cacheData = (TablePageNationDataDto) CacheMap.map.get(TABLE_PAGE);
        List<RowDataDto> data = new ArrayList<>();
        TablePageNationDataDto responseData = new TablePageNationDataDto();
        if(StringUtils.isBlank(name) &&
                StringUtils.isBlank(desc) &&
                StringUtils.isBlank(updatedAt) &&
                callNo == null &&
                status == null) {
            for(int i=0; i<pageSize;i++){
                data.add(cacheData.getData().get(i));
            }
            responseData.setCurrent(current);
            responseData.setData(data);
            responseData.setPageSize(pageSize);
            responseData.setSuccess(true);
            responseData.setTotal(Long.valueOf(cacheData.getData().size()));
            return responseData;
        } else {
            for(RowDataDto dto : cacheData.getData()){
                if(dto.getName().equals(name)||dto.getDesc().equals(desc)||
                        dto.getCallNo().equals(callNo)||dto.getStatus().equals(status)||
                        dto.getUpdatedAt().equals(updatedAt)){
                    data.add(dto);
                }
            }
            responseData.setCurrent(current);
            responseData.setData(data);
            responseData.setPageSize(pageSize);
            responseData.setSuccess(true);
            responseData.setTotal(Long.valueOf(cacheData.getData().size()));
        }
        return responseData;
    }
}
