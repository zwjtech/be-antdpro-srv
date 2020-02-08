
package com.example.antdpro.demo.dto.chart;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;

@Generated("net.hexar.json2pojo")
@SuppressWarnings("unused")
public class OfflineChartData {

    @Expose
    private Long x;
    @Expose
    private Long y1;
    @Expose
    private Long y2;

    public Long getX() {
        return x;
    }

    public void setX(Long x) {
        this.x = x;
    }

    public Long getY1() {
        return y1;
    }

    public void setY1(Long y1) {
        this.y1 = y1;
    }

    public Long getY2() {
        return y2;
    }

    public void setY2(Long y2) {
        this.y2 = y2;
    }

}
