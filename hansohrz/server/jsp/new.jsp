<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>

<%
 
String xm=aa.req.getParameter("xm");
String sr=aa.req.getParameter("sr");
String gs=aa.req.getParameter("gs");
String xx=aa.req.getParameter("xx");
String zy =aa.req.getParameter("zy");
String gw=aa.req.getParameter("gw");
String lb=aa.req.getParameter("lb");
String sm=aa.req.getParameter("sm");
String URLvalue="_previous_url_=/infocenter/executeQuery.do?state=addInfoPrompt&module=rec&state=addInfo&code=zpdj&module=rec&mod=false&tableID=20784990&oid=0&dataOid=0&userQueryLinkId=20785068&frameName=&treeName=&listUrl=&employeeInfoVO.value(C_EMPNAME)="+ xm +"&employeeInfoVO.value(C_BIRTHDAY)="+ sr +"&employeeInfoVO.value(C_ORGNAME)="+gs+"&employeeInfoVO.value(C_SCHOOL)="+xx+"&employeeInfoVO.value(C_ZY)="+zy+"&employeeInfoVO.value(C_JOB)="+gw+"&employeeInfoVO.value(C_DJLB)="+lb+"&employeeInfoVO.value(C_REMARK)="+sm+"&employeeInfoVO.value(C_DJR)=";
 
System.err.println("URLvalue:**"+URLvalue);
%>
 
<aa:http id="new" url="http://hsoa/hr/infocenter/executeQuery.do" method="post" keepreqdata="false">

<aa:header name="Content-Type" value="application/x-www-form-urlencoded" type="add"/>
  <aa:content><%=URLvalue%></aa:content>
	
		
</aa:http> 
 

 