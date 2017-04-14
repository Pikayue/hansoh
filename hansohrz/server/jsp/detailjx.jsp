<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>

<%
String ID =aa.req.getParameter("ID");
String URLvalue="http://hsoa/hr/infocenter/executeQuery.do?state=editInfoPrompt&module=rec&code=XSJXMT&tableID=22554392&oid="+ID+"&userQueryLinkId=22555242&_previous_url_=/infocenter/executeQuery.do?state=executeQuery";
                 
System.err.println("URLvalue:**"+URLvalue);
%>

 
<aa:http id="detail" url="<%=URLvalue%>" method="get" keepreqdata="false">
 
</aa:http> 


{
"list":[
		{

			"bxbh":"<%=aa.xpath("//input[@id='C22554397']/@value","detail")%>",
			"dbxm":"<%=aa.xpath("//input[@id='C22561224']/@value","detail")%>",
			"mtfzr":"<%=aa.xpath("//input[@id='C22554399']/@value","detail")%>",
			"cp1":"<%=aa.xpath("//select[@id='employeeInfoVO.value(C_PRODUCT_NAME)']/option[@selected='selected']","detail")%>",
			"cp2":"<%=aa.xpath("//select[@id='employeeInfoVO.value(C_PRODUCT_NAME2)']/option[@selected='selected']","detail")%>",
			"cp3":"<%=aa.xpath("//select[@id='employeeInfoVO.value(C_PRODUCT_NAME3)']/option[@selected='selected']","detail")%>",
			"sycx":"<%=aa.xpath("//input[@id='employeeInfoVO.value(C_LASTMONSALE)']/@value","detail")%>",
			"syrw":"<%=aa.xpath("//input[@id='employeeInfoVO.value(C_LASTMONTASK)']/@value","detail")%>",			
			"byrw":"<%=aa.xpath("//input[@id='employeeInfoVO.value(C_THISMONTASK)']/@value","detail")%>",
			"date":"<%=aa.xpath("//input[@id='employeeInfoVO.value(C_JIXIAOMIANTAN_YMD)']/@value","detail")%>",
			"sfz":"<%=aa.xpath("//textarea[@id='C22555194']","detail")%>",
			"mt1":"<%=aa.xpath("//textarea[@id='C22555196']","detail")%>",
			"mt2":"<%=aa.xpath("//textarea[@id='C22555198']","detail")%>",
		    "mtzp":"<%=aa.xpath("//select[@id='employeeInfoVO.value(C_MIANTAN_ZIPIN)']/option[@selected='selected']","detail")%>",
		    "tbxm":"<%=aa.xpath("//input[@id='C22561229']/@value","detail")%>",
		    "sf":"<%=aa.xpath("//select[@id='employeeInfoVO.value(C_JXMT_SANFANG)']/option[@selected='selected']","detail")%>",
		    "zxl":"<%=aa.xpath("//select[@id='employeeInfoVO.value(C_JXMT_ZXL)']/option[@selected='selected']","detail")%>",
		    "tdxz":"<%=aa.xpath("//select[@id='employeeInfoVO.value(C_JXMT_TDXZ)']/option[@selected='selected']","detail")%>",
		    "zhpj":"<%=aa.xpath("//select[@id='employeeInfoVO.value(C_JXMT_ZHPJ)']/option[@selected='selected']","detail")%>",
		   			
		},
	],
}

 