<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>
<%
String pageIndex=aa.req.getParameter("page");
String name=aa.req.getParameter("name");
String URL ="_previous_url_=/infocenter/executeQuery.do?state=executeQuery&module=rec&state=executeQuery&oid=22555210&code=XSJXMT&module=rec&precedureName=&tableID=22554392&recordID=&userQueryLinkId=0&condition(dataOid)=0&skey=&batchEditDefColumnName=&batchEditDefColumnValue=&condition(searchPanelCollapsed)=false&condition(23443811)="+name+"&condition(23443812)=&condition(curPage)="+ pageIndex +"&condition(pageSize)=20&curPage_input=1&pageSize_input=20&condition(sortColumn)=&condition(sortOrder)=";
           
             //_previous_url_=/infocenter/executeQuery.do?state=executeQuery&module=rec&state=executeQuery&oid=22555210&code=XSJXMT&module=rec&precedureName=&tableID=22554392&recordID=&userQueryLinkId=0&condition(dataOid)=0&skey=&batchEditDefColumnName=&batchEditDefColumnValue=&condition(searchPanelCollapsed)=false&condition(23443811)=钱岳&condition(23443812)=&condition(curPage)=1&condition(pageSize)=20&curPage_input=1&pageSize_input=20&condition(sortColumn)=&condition(sortOrder)=
             //
             //_previous_url_=/infocenter/executeQuery.do?state=executeQuery&module=rec&state=executeQuery&oid=22555210&code=XSJXMT&module=rec&precedureName=&tableID=22554392&recordID=&userQueryLinkId=0&condition(dataOid)=0&skey=&batchEditDefColumnName=&batchEditDefColumnValue=&condition(searchPanelCollapsed)=false&condition(23443811)=钱岳&condition(23443812)=&condition(curPage)=1&condition(pageSize)=20&curPage_input=1&pageSize_input=20&condition(sortColumn)=&condition(sortOrder)=

System.err.println(URL);

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
			"bxbh":"<%=aa.xpath("./td[2]/span","f_list")%>",
			"dbxm":"<%=aa.xpath("./td[3]/span","f_list")%>",
			"mtfzr":"<%=aa.xpath("./td[4]/span","f_list")%>",
			"cp1":"<%=aa.xpath("./td[5]/span","f_list")%>",
			"cp2":"<%=aa.xpath("./td[6]/span","f_list")%>",
			"cp3":"<%=aa.xpath("./td[7]/span","f_list")%>",
			"sycx":"<%=aa.xpath("./td[8]/span","f_list")%>",
			"syrw":"<%=aa.xpath("./td[9]/span","f_list")%>",
			"byrw":"<%=aa.xpath("./td[10]/span","f_list")%>",
			"date":"<%=aa.xpath("./td[11]/span","f_list")%>",
			"sckf":"<%=aa.xpath("./td[12]/span","f_list")%>",
			"mt1":"<%=aa.xpath("./td[13]/span","f_list")%>",
			"mt2":"<%=aa.xpath("./td[14]/span","f_list")%>",
			"zp":"<%=aa.xpath("./td[15]/span[1]","f_list")%>",
			"tbxm":"<%=aa.xpath("./td[16]/span","f_list")%>",
			"czy":"<%=aa.xpath("./td[17]/span","f_list")%>",
			"czsj":"<%=aa.xpath("./td[18]/span","f_list")%>",
		},
		</aa:for-each>
	],
}