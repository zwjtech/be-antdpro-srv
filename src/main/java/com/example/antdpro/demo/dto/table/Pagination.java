
package com.example.antdpro.demo.dto.table;
public class Pagination {
    private Long total;

    public Pagination(Long total) {
        this.total = total;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
