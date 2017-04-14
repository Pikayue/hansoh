<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>

<%
String ID =aa.req.getParameter("ID");
String URLvalue="http://hsoa/hr/infocenter/executeQuery.do?state=editInfoPrompt&module=rec&code=zpdj&tableID=20784990&oid="+ID+"&userQueryLinkId=20785073&_previous_url_=/infocenter/executeQuery.do?state=executeQuery";
 
System.err.println("URLvalue:**"+URLvalue);
%>

 
<aa:http id="edit" url="<%=URLvalue%>" method="get" keepreqdata="false">
 
</aa:http> 

{
 "lb":[
 {
 	"djlb":"<%=aa.xpath("//option[@selected='selected']/@value","edit")%>",
			
			
 }
 ],

"list":[
		{

			"name":"<%=aa.xpath("//input[@id='C20784995']/@value","edit")%>",
			"sr":"<%=aa.xpath("//input[@id='employeeInfoVO.value(C_BIRTHDAY)']/@value","edit")%>",
			"gs":"<%=aa.xpath("//input[@id='C20784997']/@value","edit")%>",
			"school":"<%=aa.xpath("//input[@id='C20784999']/@value","edit")%>",
			"zy":"<%=aa.xpath("//input[@id='C20785001']/@value","edit")%>",
			"gw":"<%=aa.xpath("//input[@id='C20785003']/@value","edit")%>",
			
			
			<%--"djlb":"<%=aa.xpath("//option[@selected='selected']/@value","edit")%>",--%>
			
			
			
			"xxsm":"<%=aa.xpath("//textarea[@id='C20785051']","edit")%>",
			"djr":"<%=aa.xpath("//input[@id='C20785009']/@value","edit")%>",
		
			
		},
	],
}

 