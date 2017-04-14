<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%

String url="http://hsoa/hr/bizManagement.do?state=showIndex&cache=false&shell=true";
System.err.println("power.jsp"+"请求地址"+url);
%>
<aa:http id="power" url="http://hsoa/hr/bizManagement.do?state=showIndex&cache=false&shell=true" method="post" keepreqdata="false">

<aa:header name="Content-Type" value="text/html;charset=UTF-8" type="add"/>
		
</aa:http> 
{
"title1":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//ul[@class='items-container tab-style']/li[2]/a/div","power")))%>",
"title2":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//ul[@class='items-container tab-style']/li[3]/a/div","power")))%>",
<%
String ui=aa.escapeJSON(aa.escapeXML(aa.xpath("//ul[@class='items-container tab-style']/li[2]/a/div","power")));
System.err.println("meihuo"+ui);
String viewLogIds=aa.escapeJSON(aa.escapeXML(aa.xpath("//ul[@class='items-container tab-style']/li[3]/a/div","power")));
System.err.println("meihuo2121"+viewLogIds);
%>

}



