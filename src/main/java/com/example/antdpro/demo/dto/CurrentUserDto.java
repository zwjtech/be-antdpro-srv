package com.example.antdpro.demo.dto;

import java.util.List;

/**
 * {
 * "name": "Serati Ma",
 * "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
 * "userid": "00000001",
 * "email": "antdesign@alipay.com",
 * "signature": "海纳百川，有容乃大",
 * "title": "交互专家",
 * "group": "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED",
 * "tags": [
 * {
 * "key": "0",
 * "label": "很有想法的"
 * },
 * {
 * "key": "1",
 * "label": "专注设计"
 * },
 * {
 * "key": "2",
 * "label": "辣~"
 * },
 * {
 * "key": "3",
 * "label": "大长腿"
 * },
 * {
 * "key": "4",
 * "label": "川妹子"
 * },
 * {
 * "key": "5",
 * "label": "海纳百川"
 * }
 * ],
 * "notifyCount": 12,
 * "unreadCount": 11,
 * "country": "China",
 * "geographic": {
 * "province": {
 * "label": "浙江省",
 * "key": "330000"
 * },
 * "city": {
 * "label": "杭州市",
 * "key": "330100"
 * }
 * },
 * "address": "西湖区工专路 77 号",
 * "phone": "0752-268888888"
 * }
 */
public class CurrentUserDto {
    private String address;

    private String avatar;

    private String country;

    private String email;

    private Geographic geographic;

    private String group;

    private String name;

    private Long notifyCount;

    private String phone;

    private String signature;

    private List<Tag> tags;

    private String title;

    private Long unreadCount;

    private String userid;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Geographic getGeographic() {
        return geographic;
    }

    public void setGeographic(Geographic geographic) {
        this.geographic = geographic;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getNotifyCount() {
        return notifyCount;
    }

    public void setNotifyCount(Long notifyCount) {
        this.notifyCount = notifyCount;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getUnreadCount() {
        return unreadCount;
    }

    public void setUnreadCount(Long unreadCount) {
        this.unreadCount = unreadCount;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }
}
