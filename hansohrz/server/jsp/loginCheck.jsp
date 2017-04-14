<%@ page language="java" import="java.util.*,com.fiberhome.bcs.appprocess.common.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<% 
   String username = aa.req.getParameterFromUrl("userName");
   System.err.println("****************"+username);
   String password = aa.req.getParameterFromUrl("password");
   System.err.println("****************"+password);
%>

<aa:http id="loginCheck" url="http://hsoa/hr/login.do?state=login" method="post" keepreqdata="false">

   <aa:param name="userName" value="<%=username %>"/>
   <aa:param name="password" value="<%=password %>"/>
   <aa:param name="submit" value=""/>
</aa:http>

<% 
   String con = aa.xpath(".","loginCheck").trim();

   System.err.println("con**"+con);
   
   String messageError ="";
   String result ="";
   if(con.contains("用户名是必须填写的")){
	   messageError = "请输入用户名和密码";
	   result ="false";
   }else if(con.contains("用户名或密码错误")){
	   messageError = "用户名或密码错误";
	   result ="false";
   
   }else{
	   messageError = "";
	   result ="true";
   }
%>

{
	"result":"<%=result%>",
	"messageError":"<%=messageError%>",

}