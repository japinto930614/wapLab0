import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.stream.Collector;

public class LoginServlet extends HttpServlet {

    private final String username = "admin";
    private final String password = "password";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("pwd");
        String remember = request.getParameter("remember");


        if (this.username.equals(username) && this.password.equals(password)) {
            //get the old session and invalidate
            HttpSession oldSession = request.getSession(false);
            if (oldSession != null) {
                oldSession.invalidate();
            }
            //generate a new session
            HttpSession newSession = request.getSession(true);

            //setting session to expiry in 5 mins
            newSession.setMaxInactiveInterval(5 * 60);

            Cookie message = new Cookie("message", "Welcome");
            response.addCookie(message);

            Cookie usernameCookie = new Cookie("username", username);

            if ("on".equals(remember)) {

                usernameCookie.setMaxAge(60 * 60 * 24 * 30);
                response.addCookie(usernameCookie);
            } else {
                usernameCookie.setMaxAge(0);
            }
            response.addCookie(usernameCookie);
            response.sendRedirect("LoginSuccess.jsp");

        } else {
            RequestDispatcher rd = getServletContext().getRequestDispatcher("/loginPage.html");
            PrintWriter out = response.getWriter();
            out.println("<font color=red>Either username or password is wrong.</font>");
            rd.include(request, response);
        }
    }
}
