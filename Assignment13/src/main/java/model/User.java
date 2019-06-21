package model;

public class User {

    private String name;
    private String pword;

    public User() {
    }

    public User(String name, String pword) {
        this.name = name;
        this.pword = pword;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPword() {
        return pword;
    }

    public void setPword(String pword) {
        this.pword = pword;
    }
}
