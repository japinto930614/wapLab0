package controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SignUp extends HttpServlet {
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
}
