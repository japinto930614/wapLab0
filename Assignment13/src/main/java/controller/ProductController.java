package controller;

import Repository.ProductDAO;
import Repository.ShoppingCartDAO;
import model.Product;
import model.ShoppingCart;
import org.codehaus.jackson.map.ObjectMapper;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/product")
public class ProductController extends HttpServlet {

    private static final long serialVersionUID = 1L;
            
             private ProductDAO productDAO;
             private ShoppingCartDAO shoppingCartDAO;
             ObjectMapper mapper = new ObjectMapper();
    
            

    @Override
    public void init(ServletConfig config) throws ServletException {
        productDAO = new ProductDAO();
        shoppingCartDAO = new ShoppingCartDAO();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("products", productDAO.getAllProducts());

        ServletContext shoppingCartContext= request.getServletContext();
        shoppingCartContext.setAttribute("shoppingCart",shoppingCartDAO);

        RequestDispatcher view = request.getRequestDispatcher("views/product.jsp");
        view.forward(request, response);
    }
            
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

//        Product product = mapper.readValue(request.getParameter("product"), Product.class);
//        product.setId(dao.genId());

        String id = request.getParameter("id");
        Product product = productDAO.getProductById(Integer.parseInt(id));

        shoppingCartDAO.addProduct(product);
 
//        PrintWriter out =response.getWriter();
//        try{
//            out.print(mapper.writeValueAsString(product));
//        }catch (JsonGenerationException e) {
//            e.printStackTrace();
//        }
    }
             

}
