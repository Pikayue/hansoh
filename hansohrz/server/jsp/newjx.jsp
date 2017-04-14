<%-- ExMobi JSP文件，注释和取消快捷键统一为Ctrl+/ 多行注释为Ctrl+Shift+/ --%>
<%@ page language="java" import="java.util.*"
 contentType="application/uixml+xml; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/client/adapt.jsp"%>

<%
 
String dbxm=aa.req.getParameter("dbxm");
String tbxm=aa.req.getParameter("tbxm");
String bxbh=aa.req.getParameter("bxbh");
String mtfzr=aa.req.getParameter("mtfzr");
String cp=aa.req.getParameter("cp");
String cp2=aa.req.getParameter("cp2");
String cp3=aa.req.getParameter("cp3");
String sycx=aa.req.getParameter("sycx");
String syrw=aa.req.getParameter("syrw");
String byrw=aa.req.getParameter("byrw");
String date=aa.req.getParameter("date");
String sfz=aa.req.getParameter("sfz");
String mt1=aa.req.getParameter("mt1");
String mt2=aa.req.getParameter("mt2");
String mtzp=aa.req.getParameter("mtzp");
String sf=aa.req.getParameter("sf");
String zxl=aa.req.getParameter("zxl");
String tdxz=aa.req.getParameter("tdxz");
String zhpj=aa.req.getParameter("zhpj");



String URLvalue="_previous_url_=/infocenter/executeQuery.do?state=addInfoPrompt&module=rec&state=addInfo&code=XSJXMT&module=rec&mod=false&tableID=22554392&oid=0&dataOid=0&userQueryLinkId=22555237&frameName=&treeName=&listUrl=&employeeInfoVO.value(C_DAIBIAO_NAME)="+dbxm+"&employeeInfoVO.value(C_JXTBR)="+tbxm+"&employeeInfoVO.value(C_EMPLOYEE_CODE)="+bxbh+"&employeeInfoVO.value(C_JIXIAOFUZEREN)="+mtfzr+"&employeeInfoVO.value(C_PRODUCT_NAME)="+cp+"&employeeInfoVO.value(C_PRODUCT_NAME2)="+cp2+"&employeeInfoVO.value(C_PRODUCT_NAME3)="+cp3+"&employeeInfoVO.value(C_LASTMONSALE)="+sycx+"&employeeInfoVO.value(C_LASTMONTASK)="+syrw+"&employeeInfoVO.value(C_THISMONTASK)="+byrw+"&employeeInfoVO.value(C_JIXIAOMIANTAN_YMD)="+date+"&employeeInfoVO.value(C_MARKET_ANALYSE)="+sfz+"&employeeInfoVO.value(C_JIXIAOMIANTAN_NOTES1)="+mt1+"&employeeInfoVO.value(C_C_JIXIAOMIANTAN_NOTES2)="+mt2+"&employeeInfoVO.value(C_MIANTAN_ZIPIN)="+mtzp+"&employeeInfoVO.value(C_JXMT_SANFANG)="+sf+"&employeeInfoVO.value(C_JXMT_ZXL)="+zxl+"&employeeInfoVO.value(C_JXMT_TDXZ)="+tdxz+"&employeeInfoVO.value(C_JXMT_ZHPJ)="+zhpj;
 
System.err.println("URLvalue:**"+URLvalue);
%>
 
<aa:http id="new" url="http://hsoa/hr/infocenter/executeQuery.do" method="post" keepreqdata="false">

<aa:header name="Content-Type" value="application/x-www-form-urlencoded" type="add"/>
  <aa:content><%=URLvalue%></aa:content>
	
		
</aa:http> 
 

 