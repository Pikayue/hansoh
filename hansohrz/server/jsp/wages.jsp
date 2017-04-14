<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%
String url="";
String year=aa.req.getParameter("year");
String yue=aa.req.getParameter("yue");
if (!year.isEmpty() && !yue.isEmpty() && !year.equals("0") && !yue.equals("0"))
{
	String data=year+"-"+yue+"-01";
	url="http://hr.hansoh.cn:8080/hr/cmpinfo/payRollInfo.do?state=getLatelyPayRoll&_previous_url_=%2Fcmpinfo%2FpayRollInfo.do%3Fstate%3DgetLatelyPayRoll&searchTime="+data;
}
else
{
	url="http://hr.hansoh.cn:8080/hr/cmpinfo/payRollInfo.do?state=getLatelyPayRoll";
}
System.err.println("请求地址"+url);
%>
<aa:http url="<%=url%>" id="wages"></aa:http>
{
"basic":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[1]","wages")))%>",
"job":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[2]","wages")))%>",
"overtime":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[3]","wages")))%>",
"performance":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[4]","wages")))%>",
"ourage":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[5]","wages")))%>",
"night":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[6]","wages")))%>",
"station":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[7]","wages")))%>",
"practice":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[8]","wages")))%>",
"allowance":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[9]","wages")))%>",
"other":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[10]","wages")))%>",
"leave":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[11]","wages")))%>",
"yfsum":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[12]","wages")))%>",
"qtcut":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[13]","wages")))%>",
"cutsum":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[14]","wages")))%>",
"sfsum":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//table[@class='tbDataTable']/tr/td[15]","wages")))%>",
"title":"<%=aa. regex.regex("[0-9]{4}-[0-9]{1,2}","wages")%>",
"nodata":"<%=aa.escapeJSON(aa.escapeXML(aa.xpath("//td[@class='tbNonData']","wages")))%>",


<%
String ui=aa.escapeJSON(aa.escapeXML(aa.xpath("//td[@class='tbNonData']","wages")));
System.err.println("meihuo"+ui);
String viewLogIds=aa. regex.regex("[0-9]{4}-[0-9]{1,2}","wages");
System.err.println("meihuo2121"+viewLogIds);
%>

}



