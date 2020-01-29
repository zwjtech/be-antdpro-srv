package com.example.antdpro.demo.dto;

/**
 * {
 * "status": "ok",
 * "type": "account",
 * "currentAuthority": "admin"
 * }
 */
public class LoginResultDto {
    private String status;
    private String type;
    private String currentAuthority;

    public LoginResultDto(String status, String type, String currentAuthority) {
        this.status = status;
        this.type = type;
        this.currentAuthority = currentAuthority;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCurrentAuthority() {
        return currentAuthority;
    }

    public void setCurrentAuthority(String currentAuthority) {
        this.currentAuthority = currentAuthority;
    }

    @Override
    public String toString() {
        return "loginResultDto{" +
                "status='" + status + '\'' +
                ", type='" + type + '\'' +
                ", currentAuthority='" + currentAuthority + '\'' +
                '}';
    }
}
