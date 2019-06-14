package model;

import java.util.List;

public class ShoppingCart {
    private List<Product> productList;

    public ShoppingCart(){};

    public List<Product> getProductList() {
        return productList;
    }

    public void addProduct(Product product){
        productList.add(product);
    }

    public void removeProduct(Product product){
        productList.remove(product);
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }
}
