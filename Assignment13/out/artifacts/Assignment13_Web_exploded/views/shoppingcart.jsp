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
<a href="product">Products</a>
  
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

            <td><button id="${product.id}" class="deletebutton">Delete</button></td>
                       
        </tr>
        
                 </c:forEach>
         
    </tbody>
      
</table>


</body>
</html>
