
package com.example.antdpro.demo.dto.table;

import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;

@Generated("net.hexar.json2pojo")
@SuppressWarnings("unused")
public class TablePageNationDataDto {

    @Expose
    private Long current;
    @Expose
    private List<RowDataDto> data;
    @Expose
    private Long pageSize;
    @Expose
    private Boolean success;
    @Expose
    private Long total;

    public Long getCurrent() {
        return current;
    }

    public void setCurrent(Long current) {
        this.current = current;
    }

    public List<RowDataDto> getData() {
        return data;
    }

    public void setData(List<RowDataDto> data) {
        this.data = data;
    }

    public Long getPageSize() {
        return pageSize;
    }

    public void setPageSize(Long pageSize) {
        this.pageSize = pageSize;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

}
