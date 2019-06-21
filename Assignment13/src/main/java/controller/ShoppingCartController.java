package controller;

import Repository.ShoppingCartDAO;
import model.Product;
import model.ShoppingCart;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;


@WebServlet("/shoppingcart")
public class ShoppingCartController extends HttpServlet {

    private ShoppingCartDAO shoppingCartDAO;
    private List<Product> products;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ServletContext shoppingCartContext = request.getServletContext();

        shoppingCartDAO = (ShoppingCartDAO) shoppingCartContext.getAttribute("shoppingCart");

        products = shoppingCartDAO.getAllProducts();
        request.setAttribute("products", products);
        RequestDispatcher view = request.getRequestDispatcher("views/shoppingcart.jsp");
        view.forward(request, response);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
}
