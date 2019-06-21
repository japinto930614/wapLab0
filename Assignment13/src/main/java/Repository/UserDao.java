package Repository;

import model.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserDao {
    List<User> users = new ArrayList<>();

    public UserDao() {
        users.add(new User("jorge", "123"));
        users.add(new User("winta", "123"));

    }

    public List<User> getAllUsers() {
        return users;
    }

}
