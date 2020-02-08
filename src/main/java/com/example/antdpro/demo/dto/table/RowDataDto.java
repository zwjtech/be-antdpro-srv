package com.example.antdpro.demo.dto.table;

import com.example.antdpro.demo.utils.DateUtils;
import com.google.gson.annotations.Expose;
import org.apache.commons.lang3.RandomUtils;

import java.util.Date;
import java.util.Random;

public class RowDataDto {
    @Expose
    private String avatar;
    @Expose
    private Long callNo;
    @Expose
    private String createdAt;
    @Expose
    private String desc;
    @Expose
    private Boolean disabled;
    @Expose
    private String href;
    @Expose
    private Long key;
    @Expose
    private String name;
    @Expose
    private String owner;
    @Expose
    private Long progress;
    @Expose
    private Long status;
    @Expose
    private String title;
    @Expose
    private String updatedAt;

    public static RowDataDto build(String desc){
        RowDataDto dto = new RowDataDto();
        dto.setAvatar("test");
        dto.setCallNo(RandomUtils.nextLong(500,1000));
        dto.setDesc(desc);
        dto.setCreatedAt(DateUtils.convert(new Date(),DateUtils.DATE_TIME_FORMAT));
        dto.setDisabled(false);
        dto.setHref("www.baidu.com");
        dto.setKey(RandomUtils.nextLong(1000,2000));
        dto.setName("test");
        dto.setStatus(RandomUtils.nextLong(0,4));
        dto.setOwner("zzz");
        dto.setProgress(2L);
        dto.setTitle("test");
        dto.setUpdatedAt(DateUtils.convert(new Date(),DateUtils.DATE_TIME_FORMAT));
        return dto;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Long getCallNo() {
        return callNo;
    }

    public void setCallNo(Long callNo) {
        this.callNo = callNo;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Boolean getDisabled() {
        return disabled;
    }

    public void setDisabled(Boolean disabled) {
        this.disabled = disabled;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public Long getKey() {
        return key;
    }

    public void setKey(Long key) {
        this.key = key;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public Long getProgress() {
        return progress;
    }

    public void setProgress(Long progress) {
        this.progress = progress;
    }

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
        this.status = status;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }
}
