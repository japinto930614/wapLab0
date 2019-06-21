<%--
  Created by IntelliJ IDEA.
  User: Jorge
  Date: 2019-06-19
  Time: 22:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
 
 
<!DOCTYPE HTML> 
<html>
<head>


    <title>Add New Contact</title>
      

    <script type="text/javascript" src="script.js"></script>

</head>
<body>
<a href="logout">Logout</a>
  
<table id="tbl_products">
         
    <thead>
            
    <tr>
                   
        <th>Id</th>
                   
        <th>Name</th>
                   
        <th>Price</th>
                
    </tr>
         
    </thead>
         
    <tbody>
             <c:forEach items="${products}" var="product"> 
                   
        <tr>
                          
            <td><c:out value="${product.id}"/></td>
                          
            <td><c:out value="${product.name}"/></td>
                          
            <td><c:out value="${product.price}"/></td>
                       
        </tr>
         
                 </c:forEach>
         
    </tbody>
      
</table>


  
<fieldset>
         
    <div>
                 <label for="id">Id</label> <input type="text" id="product_id" readonly="readonly/> 
      </div> 
      <div> 
         <label for=" name">Name</label> <input type="text" id="product_name"/>
             
    </div>
         
    <div>
                 <label for="price">Price</label> <input type="text" id="product_price"/>
             
    </div>

         
    <div>
                 <input id="btn_add" type="submit" value="Submit"/>
             
    </div>
      
</fieldset>
</body>
</html>
