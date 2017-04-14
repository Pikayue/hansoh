<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%
	String url1="http://hsoa/hr/infocenter/executeQuery.do";
	//String url2="http://hsoa/workflow/request/ManageRequestNoFormIframe.jsp?requestid="+session.getAttribute("wfid")+"&message=2&topage=&docfileid=&newdocid=";
    System.err.println("+++++++"+url1);
%>
<aa:http id="save" url="<%=url1%>" method="post"  keepreqdata="false"></aa:http>
<%--<aa:http id="result" url="<%=url2%>" method="get" keepreqdata="false"></aa:http>--%>

<%--{
	"result":"<%=aa.xpath("//input[@name='picInnerFrameurl']/following-sibling::table[1]/tr/td/table//font/.","result")%>",
}--%>