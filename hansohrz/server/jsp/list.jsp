<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%
String pageIndex=aa.req.getParameter("page");
String name=aa.req.getParameter("name");
String URL ="_previous_url_=/infocenter/executeQuery.do?state=executeQuery&state=executeQuery&oid=22381865&code=zpdj&module=rec&precedureName=&tableID=20784990&recordID=&userQueryLinkId=0&condition(dataOid)=0&skey=&batchEditDefColumnName=&batchEditDefColumnValue=&condition(searchPanelCollapsed)=false&condition(22381878)="+name+"&condition(curPage)="+ pageIndex +"&condition(pageSize)=20&curPage_input=1&pageSize_input=20&condition(sortColumn)=&condition(sortOrder)=";
            
System.err.println(URL);
System.err.println("+++"+pageIndex);
%>
 
<aa:http id="list" url="http://hsoa/hr/infocenter/executeQuery.do" method="post" keepreqdata="false">

<aa:header name="Content-Type" value="application/x-www-form-urlencoded" type="add"/>
  <aa:content><%=URL%></aa:content>
	
		
</aa:http> 
 
{
 
"sum":"<%=aa.xpath("//li[4][@class='info']","list").replaceAll("/","").replaceAll("页","").trim()%>",
"list":[
		<aa:for-each var="f_list" dsId="list" xpath="//div[2]/div[2]/table[1]/tbody[1]/tr">
		{
			"num":"<%=aa.xpath("./td[1]/span","f_list")%>",
			"name":"<%=aa.xpath("./td[2]/span","f_list")%>",
			"birth":"<%=aa.xpath("./td[3]/span","f_list")%>",
			"gs":"<%=aa.xpath("./td[4]/span","f_list")%>",
			"zy":"<%=aa.xpath("./td[5]/span","f_list")%>",
			"school":"<%=aa.xpath("./td[6]/span","f_list")%>",
			"gw":"<%=aa.xpath("./td[7]/span","f_list")%>",
			"djlb":"<%=aa.xpath("./td[8]/span","f_list")%>",
			"xxsm":"<%=aa.xpath("./td[9]/span","f_list")%>",
			"djr":"<%=aa.xpath("./td[10]/span","f_list")%>",
			"date":"<%=aa.xpath("./td[11]/span","f_list")%>",
			
		},
		</aa:for-each>
	],
}