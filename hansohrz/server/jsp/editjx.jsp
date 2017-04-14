<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>

<%
String ID =aa.req.getParameter("ID");
String URLvalue="http://hsoa/hr/infocenter/executeQuery.do?state=editInfoPrompt&module=rec&code=XSJXMT&tableID=22554392&oid="+ID+"&userQueryLinkId=22555242&_previous_url_=/infocenter/executeQuery.do?state=executeQuery";
                 
System.err.println("URLvalue:**"+URLvalue);
%>

 
<aa:http id="edit" url="<%=URLvalue%>" method="get" keepreqdata="false">
 
</aa:http> 

{
 "cp":[
 {
 	"cpxz":"<%=aa.xpath("//div[5]/table/tr/td[2]/div/div/select/option[@selected='selected']/@value","edit")%>",	
 }
 ],
 
 
 "cp2":[
 {
 	"cpxz2":"<%=aa.xpath("//div[6]/table/tr/td[2]/div/div/select/option[@selected='selected']/@value","edit")%>",	
 }
 ],
 
 
 "cp3":[
 {
 	"cpxz3":"<%=aa.xpath("//div[7]/table/tr/td[2]/div/div/select/option[@selected='selected']/@value","edit")%>",	
 }
 ],
 
 "mt":[
 {
 	"mtzp":"<%=aa.xpath("//div[15]/table/tr/td[2]/div/div/select/option[@selected='selected']/@value","edit")%>",	
 }
 ],
 
 "sf":[
 {
 	"sfxq":"<%=aa.xpath("//div[17]/table/tr/td[2]/div/div/select/option[@selected='selected']/@value","edit")%>",	
 }
 ],
 
 "zxl":[
 {
 	"zxlxq":"<%=aa.xpath("//div[18]/table/tr/td[2]/div/div/select/option[@selected='selected']/@value","edit")%>",	
 }
 ],
 
 "tdxz":[
 {
 	"tdxzxq":"<%=aa.xpath("//div[19]/table/tr/td[2]/div/div/select/option[@selected='selected']/@value","edit")%>",	
 }
 ],
 
 "zhpj":[
 {
 	"zhpjxq":"<%=aa.xpath("//div[20]/table/tr/td[2]/div/div/select/option[@selected='selected']/@value","edit")%>",	
 }
 ],

"list":[
		{

			"bxbh":"<%=aa.xpath("//input[@id='C22554397']/@value","edit")%>",
			"dbxm":"<%=aa.xpath("//input[@id='C22561224']/@value","edit")%>",
			"mtfzr":"<%=aa.xpath("//input[@id='C22554399']/@value","edit")%>",
			"sycx":"<%=aa.xpath("//input[@id='employeeInfoVO.value(C_LASTMONSALE)']/@value","edit")%>",
			"syrw":"<%=aa.xpath("//input[@id='employeeInfoVO.value(C_LASTMONTASK)']/@value","edit")%>",			
			"byrw":"<%=aa.xpath("//input[@id='employeeInfoVO.value(C_THISMONTASK)']/@value","edit")%>",
			"date":"<%=aa.xpath("//input[@id='employeeInfoVO.value(C_JIXIAOMIANTAN_YMD)']/@value","edit")%>",
			"sfz":"<%=aa.xpath("//textarea[@id='C22555194']","edit")%>",
			"mt1":"<%=aa.xpath("//textarea[@id='C22555196']","edit")%>",
			"mt2":"<%=aa.xpath("//textarea[@id='C22555198']","edit")%>",
		    "tbxm":"<%=aa.xpath("//input[@id='C22561229']/@value","edit")%>",
			
		},
	],
}

 