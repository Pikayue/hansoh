<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
 <%
String ID=aa.req.getParameter("ID");
String URL1="http://hsoa/hr/infocenter/executeQuery.do?state=deleteInfo&module=rec&code=XSJXMT&tableID=22554392&recordID="+ID+"&userQueryLinkId=22555243&_previous_url_=/infocenter/executeQuery.do?state=executeQuery \" method=\"get\" keepreqdata=\"false\"";

System.err.println(ID);
System.err.println("删除"+URL1);
%>
 
<aa:http id="del" url="<%=URL1%>" method="get" keepreqdata="false"/>
 