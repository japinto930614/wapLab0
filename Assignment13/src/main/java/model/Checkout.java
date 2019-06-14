package model;

public class Checkout {

    private User user;
    private Payment payment;
    private ShoppingCart shoppingCart;
    private Address ShippingAddress;

    public Checkout(User user, Payment payment, ShoppingCart shoppingCart, Address shippingAddress) {
        this.user = user;
        this.payment = payment;
        this.shoppingCart = shoppingCart;
        ShippingAddress = shippingAddress;
    }

    public Address getShippingAddress() {
        return ShippingAddress;
    }

    public void setShippingAddress(Address shippingAddress) {
        ShippingAddress = shippingAddress;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
}
