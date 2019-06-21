package controller;

import Repository.UserDao;
import model.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

@WebServlet("/login")
public class LoginController extends HttpServlet {
    private UserDao dao = new UserDao();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String uname = req.getParameter("uname");
        String pword = req.getParameter("pword");
        List<User> users = dao.getAllUsers();
        boolean b = false;
        User ur = null;
        for (User u : users) {

            if (u.getName().equals(uname) && u.getPword().equals(pword)) {
                ur = u;
                b = true;
                break;
            }
        }

        if (b) {

            HttpSession sss = req.getSession();
            sss.setAttribute("ssName", ur);
            Cookie c = new Cookie("name", ur.getName());

            c.setMaxAge(7200);
            resp.addCookie(c);

            resp.sendRedirect("/product");
        } else {
            req.setAttribute("msg", "incorrect password");
            req.getRequestDispatcher("views/login.jsp").forward(req, resp);
        }
    }


}