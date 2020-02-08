
package com.example.antdpro.demo.dto.chart;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;

@Generated("net.hexar.json2pojo")
@SuppressWarnings("unused")
public class SaleDataDto {

    @Expose
    private String x;
    @Expose
    private Long y;

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public Long getY() {
        return y;
    }

    public void setY(Long y) {
        this.y = y;
    }

}
