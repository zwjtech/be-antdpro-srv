
package com.example.antdpro.demo.dto.table;

import javax.annotation.Generated;
import com.google.gson.annotations.SerializedName;

import java.util.List;

@Generated("net.hexar.json2pojo")
@SuppressWarnings("unused")
public class SubmitResultDto {
    private List<RowDataDto> list;
    private Pagination pagination;

    public List<RowDataDto> getList() {
        return list;
    }

    public void setList(List<RowDataDto> list) {
        this.list = list;
    }

    public Pagination getPagination() {
        return pagination;
    }

    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }
}
