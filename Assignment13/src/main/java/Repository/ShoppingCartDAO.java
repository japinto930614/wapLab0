package Repository;

import model.Product;

import java.util.ArrayList;
import java.util.List;

public class ShoppingCartDAO {
    List<Product> productsDb = new ArrayList<Product>();

    public void addProduct( Product product) {
        productsDb.add(product);
    }

    public List<Product> getAllProducts(){
        return productsDb;
    }
}
