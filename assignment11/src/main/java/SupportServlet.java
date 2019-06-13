import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SupportServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<form method='post'>");
        out.print("<p>Please click the button</p>");
        out.print("<ul>");
        out.print("<li>Name:<input type='text' name='name'/></li>");
        out.print("<li>Email Address:<input type='text' name='email'/></li>");
        out.print("<li>Problem:<input type='text'/></li>");
        out.print("<li>Problem Description<textarea name=''></textarea></li>");
        out.print("</ul>");
//        out.print("<input type='submit' value='Click me'/>");
        out.print("<input type='submit' value='Help'/>");
        out.print("</form>");
        out.print("</body></html>");





    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String supportEmail = getServletContext().getInitParameter("Support-email");
        int ticket = req.hashCode();

        out.print("<html><head><title>Test</title></head><body>");
        out.print("<p>Thank you! "+name+" for contacting us. We should receive reply from us with in 24 hrs in your email address "+
                email+" Let us know in our support email "+supportEmail+" if you don’t receive reply within 24 hrs. Please be sure to attach your reference " +
                ticket+" in your email. </p>");
        out.print("</body></html>");
    }
}
