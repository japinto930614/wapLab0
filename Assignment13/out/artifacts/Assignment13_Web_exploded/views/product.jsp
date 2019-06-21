<%--
  Created by IntelliJ IDEA.
  User: Jorge
  Date: 2019-06-19
  Time: 22:32
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>Add New Contact</title>
    <script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"
            type="text/javascript"></script>

    <script
            src="https://code.jquery.com/jquery-3.4.1.js"
            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
            crossorigin="anonymous"></script>
    <script type="text/javascript" src="views/js/script.js"></script>

</head>
<body>
<a href="logout">Logout</a>
<a href="shoppingcart">Shopping Cart</a>
  
<table id="tbl_products">
         
    <thead>
            
    <tr>
                   
        <th>Id</th>
                   
        <th>Name</th>
                   
        <th>Price</th>

        <th></th>
                
    </tr>
         
    </thead>
         
    <tbody>
             <c:forEach items="${products}" var="product">
                   
        <tr>
                          
            <td><c:out value="${product.id}"/></td>

                          
            <td><c:out value="${product.name}"/></td>
                          
            <td><c:out value="${product.price}"/></td>

            <td><button id="${product.id}" class="addbutton">Add to shopping cart</button></td>
                       
        </tr>
        
                 </c:forEach>
         
    </tbody>
      
</table>


  
<fieldset>
         
    <div>
                 <label for="product_id">Id</label> <input type="text" id="product_id" readonly="readonly"/>
             
    </div>
         
    <div>
                 <label for="product_name">Name</label> <input type="text" id="product_name"/>
             
    </div>
         
    <div>
                 <label for="product_price">Price</label> <input type="text" id="product_price"/>
             
    </div>

         
    <div>
                 <input id="btn_add" type="submit" value="Submit"/>
             
    </div>
      
</fieldset>
</body>
</html>
