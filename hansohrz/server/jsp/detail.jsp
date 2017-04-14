<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%
String pageIndex=aa.req.getParameter("page");

%>
 
<aa:http id="detail" url="http://hsoa/hr/infocenter/executeQuery.do?state=executeQuery&module=rec&code=zpdj&clr=true&execute=true&_top=true&shell=false " method="get" keepreqdata="false"/>
{
 
"sum":"<%=aa.xpath("//table/@pagenum","detail")%>",

"list":[
		<aa:for-each var="f_detail" dsId="detail" xpath="//div[2]/div[2]/table[1]/tbody[1]/tr">
		{
			"num":"<%=aa.xpath("./td[1]/span","f_detail")%>",
			"name":"<%=aa.xpath("./td[2]/span","f_detail")%>",
			"gs":"<%=aa.xpath("./td[3]/span","f_detail")%>",
			"school":"<%=aa.xpath("./td[4]/span","f_detail")%>",
			"zy":"<%=aa.xpath("./td[5]/span","f_detail")%>",
			"gw":"<%=aa.xpath("./td[6]/span","f_detail")%>",
			"djlb":"<%=aa.xpath("./td[7]/span","f_detail")%>",
			"xxsm":"<%=aa.xpath("./td[8]/span","f_detail")%>",
			"djr":"<%=aa.xpath("./td[9]/span","f_detail")%>",
			"djlb":"<%=aa.xpath("./td[10]/span","f_detail")%>",
			"xxsm":"<%=aa.xpath("./td[11]/span","f_detail")%>",
			"djr":"<%=aa.xpath("./td[12]/span","f_detail")%>",
			"date":"<%=aa.xpath("./td[13]/span","f_detail")%>",
			
			
		},
		</aa:for-each>
	],
}