<%--
  Created by IntelliJ IDEA.
  User: Jorge
  Date: 2019-06-12
  Time: 14:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
  <meta charset="US-ASCII">
  <title>Login Page</title>
  <h1>Please login to continue</h1>
</head>
<body>

<%
  String username = "";

  Cookie[] cookies = request.getCookies();
  if(cookies != null){
    for(Cookie cookie : cookies){
      if(cookie.getName().equals("username")) username = cookie.getValue();
    }
  }
%>

<form action="LoginServlet" method="post">

  Username: <input type="text" name="username" value="<%=username%>">
  <br>
  Password: <input type="password" name="pwd">
  <br>
  Remember me <input type="checkbox" name="remember" checked>
  <br>
  <input type="submit" value="Login">
</form>
</body>
</html>