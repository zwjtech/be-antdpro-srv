
package com.example.antdpro.demo.dto;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;

@Generated("net.hexar.json2pojo")
@SuppressWarnings("unused")
public class RegisterDto {

    @Expose
    private String captcha;
    @Expose
    private String confirm;
    @Expose
    private String mail;
    @Expose
    private String mobile;
    @Expose
    private String password;
    @Expose
    private String prefix;

    public String getCaptcha() {
        return captcha;
    }

    public void setCaptcha(String captcha) {
        this.captcha = captcha;
    }

    public String getConfirm() {
        return confirm;
    }

    public void setConfirm(String confirm) {
        this.confirm = confirm;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    @Override
    public String toString() {
        return "RegisterDto{" +
                "captcha='" + captcha + '\'' +
                ", confirm='" + confirm + '\'' +
                ", mail='" + mail + '\'' +
                ", mobile='" + mobile + '\'' +
                ", password='" + password + '\'' +
                ", prefix='" + prefix + '\'' +
                '}';
    }
}
