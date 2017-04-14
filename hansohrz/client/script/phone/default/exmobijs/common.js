function logout() {
	    var url = "http://oa_domain/todoothergdzcdetail.jsp";
	    var requestHeader = '{"Content-Type":"application/x-www-form-urlencoded","Accept-Language":"zh-cn"}';
	    var isShowProgress = false;
	    var dajax = new Ajax("http://logout.jsp",'get','',logoutCallBack,logoutCallCel,requestHeader,isShowProgress);						
	    dajax.send();

}
function logoutCallBack(ajax) {
	Util.goHtmlPageById("login");
}
function failFunction(ajax) {
	alert("获取数据失败，请重新尝试！", cxdl);
}
function cxdl() {
	window.close();
}
function relogin()
{
	logout();
}
function logoutCallCel()
{
	 Util.goHtmlPageById("login");
}

//****************************邮件通用函数***************************
//textStyle  1:纯文本 0：非纯文本
//回复
function replyclick()
{
	var strTextStyle;
	var url;
	//http://mail.ppm.cn/mail/huyb.nsf/c8f55f34d8a1e80c48257506002cccd7/d0daff9250ea06e248257c7c002ffb5d?OpenDocument&view=($inbox)&start=1&count=10
	var pathname=Util.base64Decode("detailUrl".session());
	var path=pathname.substring(0,pathname.toLowerCase().lastIndexOf('.nsf')+4);
	var unid=pathname.substring(pathname.lastIndexOf('/')+1,pathname.lastIndexOf('?'));
	var maillx = window.getStringSession("maillx");
	if(maillx == "foldersboxlist"){
		unid = "viewform".session();
	}
	var urlHead; 
	urlHead = path + '/Reply+With+History?OpenForm&parentUNID=' + unid + '&option=Reply';  
	var strMailOrigin = $("fldMailOrigin").value;
	var strReplyConfig = $("fldReplyConfig").value;
	strTextStyle = $("textStyle").value;
	if(strTextStyle != "" ){
		if(strMailOrigin == "0"){
			url = urlHead + "&textstyle=" + strTextStyle + "&mo=" + strMailOrigin + "&r=" + strReplyConfig ; 
    		}else{
    			url = urlHead + "&textstyle=" + strTextStyle ; 	
     	}
	}else{
		url = urlHead; 
	}
    //进入回复页面
	"strTextStyle".session(strTextStyle);
	"replyUrl".session(Util.base64Encode(url));
	window.open("res:page/mail/reply.xhtml");
}
//转发
function fnForward()
{
	var url;
	var strTextStyle;
	var pathname=Util.base64Decode("detailUrl".session());
	var path=pathname.substring(0,pathname.toLowerCase().lastIndexOf('.nsf')+4);
	var unid=pathname.substring(pathname.lastIndexOf('/')+1,pathname.lastIndexOf('?')); 
	var maillx = window.getStringSession("maillx");
	if(maillx == "foldersboxlist"){
		unid = "viewform".session();
	}
	var urlHead;
	urlHead = path + '/wForWard?OpenForm&parentUNID=' + unid + '&option=Forward'; 
	var strMailOrigin = $("fldMailOrigin").value;
	strTextStyle = $("textStyle").value;
	if(strTextStyle != "" ){
		if(strMailOrigin == "0"){
			url = urlHead + "&textstyle=" + strTextStyle + "&mo=" + strMailOrigin ; 
    		}else{
    		url = urlHead + "&textstyle=" + strTextStyle ; 	
     	}
	}else{
		url = urlHead; 
	}
	//进入回复页面
	"strTextStyle".session(strTextStyle);
	"forwardUrl".session(Util.base64Encode(url));
	window.open("res:page/mail/forward.xhtml");
}
//永久删除
function deleteButtonClick()
{
  confirm("邮件删除后将无法恢复，确认删除?",deleteOk);
}	
function deleteOk(){
	var tempstr;
	var dbname;
	var pos;
	var viewName;
	var backpos;
	tempstr = Util.base64Decode("detailUrl".session()).toLowerCase();
	pos = tempstr.indexOf(".nsf/");
	if (pos != -1) {
		// 储存数据库名;
		dbname = tempstr.substring(0, pos + 5);//
		backpos = pos + 5;
		// 获取表单的unid
		pos = tempstr.lastIndexOf("/");
		viewName = tempstr.substring(backpos, pos);
		tempstr = tempstr.substring(pos + 1,tempstr.indexOf("?"));
		// http://mail.ppm.cn/mail/ceshi02.nsf/c8f55f34d8a1e80c48257506002cccd7/3d19292565eb003848257c7c002d94d4?OpenDocument&view=($inbox)&start=21&count=20
		var backposx = Util.base64Decode("detailUrl".session()).toLowerCase();
        start = "&"+backposx.substring(backposx.indexOf("view="));
        var maillx = window.getStringSession("maillx");
    	if(maillx == "foldersboxlist"){
    		tempstr = "viewform".session();
    	}
		// 检验unid的合法性
		if (tempstr.length == 32){
			if(maillx == "foldersboxlist"){
				var url= dbname + "wDelete?openagent&" + tempstr + "&From=" + viewName + start;
	    	}else{
	    		var url= "http://mail_domain"+dbname + "wDelete?openagent&" + tempstr + "&From=" + viewName + start;
	    	}
			var requestHeader = '{"Content-Type":"application/x-www-form-urlencoded","Accept-Language":"zh-cn"}';
			var exmobiAjax = new Ajax(url,'get','',deleteCallBack,failFunction,requestHeader,true);
				exmobiAjax.send();
	        }
	}
}
function deleteCallBack(ajax)
{
	 var maillx = window.getStringSession("maillx");
	 Util.goHtmlPageById(maillx);
	 Util.getWindowById(maillx).document.getElementById("shuaxin").click();
}
//移至废纸篓
var StrUrl;
function movetotrash(strUrl){
	StrUrl = strUrl;
	confirm("您确定要移至废纸篓?",moveToOk)
	
}
function moveToOk()
{
	var strtmp = "($Trash)";
	var strLink = Util.base64Decode("detailUrl".session()).toLowerCase();
	strLink = strLink.substr(0,strLink.indexOf(".nsf"))+".nsf";
	var maillx = window.getStringSession("maillx");
	if(maillx == "foldersboxlist"){
		StrUrl = strLink+StrUrl+"&tarfolder="+strtmp+"&docurl=http://mail_domain"+Util.base64Decode("detailUrl".session());
	}else{
		StrUrl = "http://mail_domain"+strLink+StrUrl+"&tarfolder="+strtmp+"&docurl=http://mail_domain"+Util.base64Decode("detailUrl".session());
	}
	var parm = "reqUrl="+Util.base64Encode(StrUrl);
	var requestHeader = '{"Content-Type":"application/x-www-form-urlencoded","Accept-Language":"zh-cn"}';
	var exmobiAjax = new Ajax('http://mail_domain/mailTrash.jsp','post',parm,deleteCallBack,failFunction,requestHeader,true);
		exmobiAjax.send();
}
//编辑
var G_editUrl;
function edit()
{
	var textStyle = G_editUrl.substring(G_editUrl.indexOf("textstyle=")+10,G_editUrl.indexOf("textstyle=")+11);
	"strTextStyle".session(textStyle);
	"editUrl".session(Util.base64Encode(G_editUrl));
	window.open("res:page/mail/edit.xhtml");
	//window.open("res:page/mail/edit.xhtml");
}
//邮件发送
function sentButtonClick(){
	   if("strTextStyle".session()=='0')
	   {
		   $("Body").value="<div style=\"FONT-SIZE: 10pt\"><pre>"+$("BodyT").value+ "<br/>"+$("Body").value.replace(/<br\/>/g,"\r\n")+"</pre></div>";
	   }
	   else
	   {
		   $("Body").value= $("BodyT").value+ "\r\n\r\n"+$("Body").value.replace(/<br\/>/g,"\r\n");
	   }
	   if($("WebSubject")) {
	  		if($("WebSubject").val()==""||$("WebSubject").val()==null){
	     		confirm("您输入主题为空，是否继续发送邮件？",sendOK,sendCancel);
	    		}else{
	      		if ($("tmpAlreadySent").value != "1@@###") {
		   			if (!verifyPreSend()){ 
						return; 
					}
		   			$("tmpSendOptions").value = "1";
		   			$("tmpAlreadySent").value = "1";
		   			mailsend();
		 		}
	    		}
	  	}
	}

	function verifyPreSend()
	{
		// thisform = document.forms[0];
		if ($("SendTo").value == "" && $("CopyTo").value == "" && $("BlindCopyTo").value == "") {
			$("SendTo").setFocus();
			alert("请指定此消息的接收人");
			return false;
		} 
		return true;
	}
	function sendOK()
	{
		if ($("tmpAlreadySent").value != "1@@###") {
 			if (!verifyPreSend()){ 
				return; 
			}
 			$("WebSubject").value="无标题";
 			$("tmpSendOptions").value = "1";
 			$("tmpAlreadySent").value = "1";
 			mailsend();
			}
	}
	function sendCancel()
	{
		$("WebSubject").setFocus(); 
	}
	
	function mailsend()
	{
	   //修改显示样式
	   $("textStyle").value="strTextStyle".session();
       $("Memo").action = Action;
       $("Memo").success = sucessCallBack;
       $("Memo").fail = failFunction;
       $("Memo").submit();
		}
	function sucessCallBack(ajax)
	{
        if(ajax.status == 200){
			var responsetext = ajax.responseText;
            var v = new XMLDocument();
		 	v.parseXmlText(responsetext);
            var jsonObject = responsetext.toJSON();
            if(jsonObject.status=='1')
                {
            	alert("邮件发送成功",successOK);
                }
            else
                {
                  alert("邮件发送失败");
                }
		}
	}
	function successOK(){
		var maillx = window.getStringSession("maillx");
		if(maillx == "writeMail"){
			window.close();
		}else{
			Util.goHtmlPageById(maillx);
			Util.getWindowById(maillx).document.getElementById("shuaxin").click();
		}
	}
//关联文件的打开
function getGuanlian(str,title){
	//发文管理
	   if(str.indexOf("fwgl") !=-1){
		   if(str.indexOf("fwgl_1.nsf") !=-1){
		       //集团发文
			   window.open("res:page/todo/fwgl/todoFwDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   }else{
		       //股份公司发文
			   window.open("res:page/todo/fwgl/todoOtherFwDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   }
	   }
	   //收文管理
	   else if(str.indexOf("swgl") !=-1){
		   if(str.indexOf("swgl_1.nsf") !=-1){
		       //集团收文
               window.open("res:page/todo/swgl/todoSwDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   }else{
		       //股份公司收文
			   window.open("res:page/todo/swgl/todoOtherSwDetail.xhtml",true,false,"","par="+Util.base64Encode(str)+"&rec=");
			   
		   }
	   }
	   //借款管理
	   else if(str.indexOf("jkgl") !=-1){
		   //****预借借款申请
		   if(title.indexOf("借款申请") !=-1){
			   if(str.indexOf("dep") ==-1){
				   //集团
				   window.open("res:page/todo/jkgl/todoJksqDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else if(str.indexOf("jkgl_fhcm") !=-1){
				   //股份公司
				   window.open("res:page/todo/jkgl/todoOtherJksqDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else{
				   //数字传媒
				   window.open("res:page/todo/jkgl/todoOtherJksqDetail_szcm.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }
		   //****支票领用申请
		   }else if(title.indexOf("支票领用申请") !=-1){
			   if(str.indexOf("dep") ==-1 || str.indexOf("jkgl_fhcm") !=-1){
				   window.open("res:page/todo/jkgl/todoZplyDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else{
				   window.open("res:page/todo/jkgl/todoZplyDetail_szcm.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }
			   
		   }else if(title.indexOf("固定资产购置审批单") !=-1){
			   window.open("res:page/todo/jkgl/todoGdzcspDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   }
	   }
	 //报销管理
	   else if(str.indexOf("bxgl") !=-1){
		   //****差旅费报销申请
		   if(title.indexOf("差旅费报销申请") !=-1){
			   if(str.indexOf("dep") ==-1){
				   window.open("res:page/todo/bxgl/todoClfbxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else if(str.indexOf("bxgl_fhcm") !=-1){
				   window.open("res:page/todo/bxgl/todoOtherClfbxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else{
				   window.open("res:page/todo/bxgl/todoOtherClfbxDetail_szcm.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }
			   
		   }else if(title.indexOf("其他费用报销申请") !=-1){
			   if(str.indexOf("dep") ==-1){
				   window.open("res:page/todo/bxgl/todoQtfybxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else if(str.indexOf("bxgl_fhcm") !=-1){
				   window.open("res:page/todo/bxgl/todoOtherQtfybxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else{
				   window.open("res:page/todo/bxgl/todoOtherQtfybxDetail_szcm.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }
			   
		   }
		   else if(title.indexOf("会议费报销申请") !=-1){
			   if(str.indexOf("dep") ==-1){
				   window.open("res:page/todo/bxgl/todoHyfbxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else if(str.indexOf("bxgl_fhcm") !=-1){
				   window.open("res:page/todo/bxgl/todoOtherHyfbxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else{
				   window.open("res:page/todo/bxgl/todoOtherHyfbxDetail_szcm.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }
			   
		   }
		   else if(title.indexOf("医药费报销申请") !=-1){
			   if(str.indexOf("dep") ==-1){
			   		window.open("res:page/todo/bxgl/todoYyfbxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else if(str.indexOf("bxgl_fhcm") !=-1){
			   		window.open("res:page/todo/bxgl/todoOtherYyfbxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else{
			   		window.open("res:page/todo/bxgl/todoOtherYyfbxDetail_szcm.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }
		   }
		   else if(title.indexOf("业务招待费用报销申请") !=-1){
			   if(str.indexOf("dep") ==-1){
			   		window.open("res:page/todo/bxgl/todoYwzdfybxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else if(str.indexOf("bxgl_fhcm") !=-1){
			   		window.open("res:page/todo/bxgl/todoOtherYwzdfybxDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }else{
			   		window.open("res:page/todo/bxgl/todoOtherYwzdfybxDetail_szcm.xhtml",true,false,"","par="+Util.base64Encode(str));
			   }
		   }
		   else if(title.indexOf("固定资产报销申请") !=-1)
			   {
			   if(str.indexOf("dep") !=-1){
				   window.open("res:page/todo/bxgl/todoOtherGdzcDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
			    }
			   }
	   }
	   //预算管理
	   else if(str.indexOf("ysgl") !=-1){
		   window.open("res:page/todo/ysgl/todoYsglDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
	   }
	   //会议预算
	   else if(str.indexOf("hyys")!=-1){
		   if(str.indexOf("dep") !=-1){
			   window.open("res:page/todo/hyys/todoOtherHyysDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   }else{
			   window.open("res:page/todo/hyys/todoHyysDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   }
	   //募集资金
	   }else if(str.indexOf("mjzj_fhcm")!=-1){
		   if(title.indexOf("使用申请表") !=-1){
			   window.open("res:page/todo/mjzj/todoMjzjDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   }else if(title.indexOf("请款申请单") !=-1){
			   window.open("res:page/todo/mjzj/todoQkDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   }
	   //生产成本
	   }else if(str.indexOf("sccb_fhcm")!=-1){
		   if(str.indexOf("使用申请表") !=-1){
			   window.open("res:page/todo/sccb/todoSccbDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   //股份公司
		   }else if(str.indexOf("dep") !=-1){
			   window.open("res:page/todo/sccb/todoOtherSccbDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
		   }
	   //协同工作
	   }else if(str.indexOf("xtgz.nsf")!=-1){
			   window.open("res:page/todo/xtgz/todoXtgzDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
	   //稿酬管理
	   }else if(str.indexOf("gcgl_")!=-1){
			   window.open("res:page/todo/gcgl/todoGcglDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
	   }
	   //凤凰传媒用印管理
	   else if(str.indexOf("yygl_fhcm")!=-1){
		   window.open("res:page/todo/yygl/todoOtherYyglDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
	   //数字传媒用印管理
	   }else if(str.indexOf("yygl")!=-1){
        window.open("res:page/todo/yygl/todoYyglDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
    }else if(str.indexOf("zhgl")!=-1){
        if(title.indexOf("账号申请") !=-1){
            window.open("res:page/todo/zhgl/todoZhglDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
        }else if(title.indexOf("变更申请") !=-1){
            window.open("res:page/todo/zhgl/todoOtherZhglDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
        }
    //机构调整
    }else if(str.indexOf("jgtz")!=-1){
        window.open("res:page/todo/jgtz/todoJgtzDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
    }
	//物流发行公司申请
    else if(str.indexOf("wlfx_sq")!=-1){
    	//拨款通知书
 	    if(title.indexOf("拨款通知单") !=-1){
 		   window.open("res:page/todo/wlfxgssq/todoBktzsDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
        }
        //付款结算单
        else if(title.indexOf("付款结算单") !=-1) {
     	   window.open("res:page/todo/wlfxgssq/todoFkjsdDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
        }
        //付款通知书
        else if(title.indexOf("付款通知单") !=-1) {
     	   window.open("res:page/todo/wlfxgssq/todoFktzsDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
        }
        //业务招待
        else if(title.indexOf("业务招待") !=-1) {
     	   window.open("res:page/todo/wlfxgssq/todoYwzdDetail.xhtml",true,false,"","par="+Util.base64Encode(str));
        }
    }
    else{
       alert("该流程尚未移动化，请到电脑前处理！");
       return;
	   }
}

//判断是否有权限
function ispermission(str){
	if(str !=""){
		return false;
	}else{
		return true;
	}
}
function winC(){
	window.close();
}

function bianhao()
{
    if($("hfldIsbh").value=="yes") {
     alert("该借款单已经编号，不允许重新编号！");
     return false;
     }
	var pathname = $("form1").action;	
	var formname = "frmBianHao"
	var wid="print";	
 
	var advisewindow=pathname.substring(0,(pathname.lastIndexOf('.nsf')+5))+formname+'?openFORM&unid='+$("mainUnidString").value;
	window.open("res:page/todo/jkgl/bianhao.xhtml",true,false,"","par="+Util.base64Encode(advisewindow));
}
 //************************END**************************************



function cbrqCheck() {
	if(document.getElementsByName("editable")[0] && document.getElementsByName("editable")[0].value=="yes" && document.getElementsByName("fldCb_cb")[0] && document.getElementsByName("fldCb_cb")[0].checked) {
		var field2 = document.getElementsByName("fldBfrq_cb")[0];
		var fieldday = document.getElementsByName("fldDay_cb")[0];
		var endtime=getDateValue(field2.value);
		if(endtime=="error") {
			alert("请输入正确的办复日期！");	
			return false;
		}else if(isNaN(parseInt(fieldday.value))||parseInt(fieldday.value)<0) {
			alert("请输入正确的提前催办天数！");	
			return false;
		}else {
			field2.value=endtime;
			fieldday.value=parseInt(fieldday.value);
		}
	}
	return true;
}
function ltrim(str)
{
	for(var i = 0 ; i<str.length && str.charAt(i)==" " ; i++ ) ;
	return str.substring(i,str.length); 
}
function rtrim(str)
{
	for(var i = str.length ; i>0 && str.charAt(i)==" " ; i-- ) ;
	return str.substring(0,i); 
}
function cint(str)
{
	var retint=0;
	for(var i=0 ;i<str.length; i++)
	{
		if (str.charAt(i)>"9" || str.charAt(i)<"0")
		{
			break;
		}
		retint=retint*10+(str.charAt(i)-"0")
	}
	return retint;
}

function instr(str, start, substr) 
{
	for (var i=start;i<str.length && substr.indexOf(str.charAt(i))==-1;i++);
	if (i>=str.length)
	{
		return -1;
	} else {
		return i;
	}
}
function getDateValue(date)
{
	var year=-1;
	var month=-1;
	var day=-1;
	var pos=-1;
	var smonth="";
	var sday="";
	
	year=isYearValid(cint(date));
	pos=getFirstNotNumber(date,0);
	if (pos!=-1&&year!=-1)
	{
		month=cint(date.substring(pos+1));
		if (month>12 || month<1) month=-1;
	}
	pos=getFirstNotNumber(date,pos+1)
	if (pos!=-1&&month!=-1)
	{
		day=isDayValid(year,month,cint(date.substring(pos+1)));
	}
	if (day!=-1)
	{
		if (month<10)
		{ smonth='0'+month; }
		else {smonth=month}
		
		if (day<10)
		{ sday='0'+day; }
		else {sday=day}

		return year+'-'+smonth+'-'+sday
	} else {
		return "error"
	}
}
function isYearValid(year)
{
	var retyear=year;
	if (year>20 && year<100)
	{
		retyear=year+1900;
	} else {
	if (year>=0 && year<=20)
	{
		retyear=year+2000;
	} else {
		if (year<1900 || year>2100) retyear=-1;
	}
	}
	return retyear;
}
function isDayValid(year,month,day)
{
	var retday=day;
	if (day<1||day>31||month<1||month>12)
	{
		retday=-1;
	} else {
		if (day==31&&(month==2||month==4||month==6||month==9||month==11))
		{
			retday=-1;
		} else {
			if(month==2&&day>28&&!(day==29&&year%4==0&&(year%100!==0||year%400==0)))
			{
				retday=-1
			}
		}
	}
	return retday;
}
function getFirstNotNumber(str,start)
{
	for (var i=start;i<str.length && str.charAt(i)>="0" && str.charAt(i)<="9";i++);
	if (i>=str.length)
	{
		return -1;
	} else {
		return i;
	}
	
}
//去掉字符串头尾空格   
function trim(str) {   
    return str.replace(/(^\s*)|(\s*$)/g, "");   
}

function checkDate(fieldtmp)
{

var tmpdate=trim(fieldtmp.value);
if (tmpdate!="")
{
	tmpdate=getDateValue(tmpdate);
	if(tmpdate=="error")
	{
		alert("日期格式不对或者输入了错误的日期；(日期格式举例:1999-08-15)");
	} else {
		fieldtmp.value=tmpdate;
	}
}else{
	fieldtmp.value=tmpdate;	
}

}
function flowCheck() {
	return (!chkFlowIsEmpty(document.getElementsByName("flowtype")[0],"您没有选择审批流程！"));
}
function chkFlowIsEmpty(field,msg) {
    return chkIsEmpty(field,msg);
 }
function chkIsEmpty(field, errMsg) {
	 if(field){
	 	field.value = trim(field.value);
	 	if (field.value=="")
	 	{
	 	 	alert(errMsg);
	 		 return false;
	 	}
	 	else return false;
	 }
	 	else return false;
}
function checkSubFormValid()
{
	var re = /^[0-9]*$/;
     if(document.getElementsByName("fldFenShu")[0] && !re.test(document.getElementsByName("fldFenShu")[0].value)) {
	     alert("打印份数应该是正整数或零！");
	     return false;
	}
 	return true;
}

//添加关联的公文
function fnGuanlian(str){
	var url = "http://oa_domain"+str;
	window.open("res:page/todo/newsgw/guanlian.xhtml",true,false,"","par="+Util.base64Encode(url));
}
//删除关联文件
function fnDelGuanlian(){
	  var guanlianfile = $("guanlianfile").innerHTML;
	  var fldGuanlian = $("fldGuanlian").value;
	  fldGuanlian = ","+fldGuanlian;
	  var fldGuanlianShow =$("fldGuanlianShow").value;
    if(document.getElementsByName("glItem")[0]){
        var glItem = document.getElementsByName("glItem");
        var reg = /&/g;
       for(var i=0;i<glItem.length;i++){
          if(glItem[i].checked){
          	guanlianfile = guanlianfile.replace("<input type='checkbox' class='glItem' name='glItem' value='"+glItem[i].value.replace(reg,"&amp;")+"' caption='"+glItem[i].caption+"' style='width:100%'/>","");
          	var str = ","+glItem[i].value.substring(0,glItem[i].value.indexOf("|"));
          	fldGuanlian = fldGuanlian.replace(str,"");
          	fldGuanlianShow = fldGuanlianShow.replace("<TR><TD><INPUT class=\"glItem\" type=\"checkbox\" name=\"glItem\"><A href=\""+glItem[i].value.substring(glItem[i].value.indexOf("|")+1,glItem[i].valuelength).replace("&","&amp;")+"\" target=\"_blank\">"+glItem[i].caption+"</A></TD></TR>","")
          }
       }
       $("guanlianfile").innerHTML = guanlianfile;
       if(fldGuanlian !=""){
      	 $("fldGuanlian").value = fldGuanlian.substring(1,fldGuanlian.length);
      	 $("fldGuanlianShow").value = fldGuanlianShow;
       }else{
      	 $("fldGuanlian").value ="";
      	 $("fldGuanlianShow").value="<table id='glContent'><tr><th><b>关联的文件</b></th></tr></table>";
       }
    }
 }
function getRefValue(refstring,tag)
{
	var pos1;
	var pos2;
	if (-1==(pos1=refstring.indexOf(tag))) return "";
	if (-1==(pos2=refstring.indexOf("&",pos1+1))) pos2=refstring.length;
	return(refstring.substring(pos1+tag.length,pos2));
}
//是否催办
function iscb(str){
   if(str == "yes"){
	   $("div_cb").style.display = "block";
	   $("fldCb").value ="yes";
   }else{
	   $("div_cb").style.display = "none";
	   $("fldCb").value ="no";
   }
}

function uploadFile(maindocid,inputid){
	if($(inputid).value !=""){
		$("unidFile").value = maindocid;
		if(document.getElementsByName("dbPath")[0]){
			$("dbpathFile").value = document.getElementsByName("dbPath")[0].value;
		}else if(document.getElementsByName("dbpath")[0]){
			$("dbpathFile").value = document.getElementsByName("dbpath")[0].value;
		}
	    $("maindocidFile").value = $("idx_MainDocUNID").value;
	    $("inputidFile").value = inputid;
	    var form = $("uploadfile");
	    form.success = fileResult;
	    form.submit();
	}else{
		alert("请选择要上传的附件！");
		return false;
	}
}

function fileResult(ajax){
	var resposeValue = ajax.responseText.toJSON();
	if(resposeValue.result =="true"){
		if($("idx_tmpFile").value.indexOf(resposeValue.filename) !=-1){
			
		}else{
			$("idx_tmpFile").value = $("idx_tmpFile").value + "\\" + resposeValue.filename;
		}
		
		var toast = new Toast();
	    toast.setText("上传成功！");
	    toast.setDuration(2000);
	    toast.setStyle("padding:20 50");
	    toast.show();
	}else{
		alert("上传失败，请重新尝试！");
		return false;
	}
	
}

function tuichu(){
	if(document.getElementsByName("saveoptions")[0]){
		document.getElementsByName("saveoptions")[0].value = "0";
	}
	
	if(document.getElementsByName("$$querysaveagent")[0]){
		document.getElementsByName("$$querysaveagent")[0].value = "agtExit";
	}
	
	if(($("form1").action).indexOf("app")==-1){
		Util.execScript("script:close");
		return;
	}
	
	fnIgnoreForceLockClear();
	var form1 = $("form1");
	form1.success = funsuccess;
	form1.fail = failResult;
	/*form1.isHideProcess=true;
	var toast = new Toast();
    toast.setText("正在退出...");
    toast.setStyle("padding:20 50");
    toast.show();*/
	form1.submit();
}

//忽略强制解锁
function fnIgnoreForceLockClear(){
	 if (document.getElementsByName("hfldIsEditMode")[0]){
		 document.getElementsByName("hfldForceClearLock")[0].value="0";
	 }
}

function funsuccess(ajax){
	Util.execScript("script:close");
}

function failResult(){
	Util.execScript("script:reloadapp");
}

//添加上传文件框
var ft=0;
function addUploadFile(){
	ft++;
	var reg = /.*uploadFile\('([^']*)',.*/g;
	var maindocid = $("uploadFile").innerHTML.replace(reg,"$1");
	$("uploadFile").append("<hr/><div class=\"div_btn_upload\" href=\"uploadFile('"+maindocid+"','fileid"+ft+"')\">上传</div><input type=\"file\" isshowclear=\"true\" name=\"fileid"+ft+"\" id=\"fileid"+ft+"\" style=\"width:65%\"/><img src=\"res:image/icon/add.png\" style=\"width:40dp;\" href=\"addUploadFile()\"/>");
}

//添加上传的图片框
var mt=0;
function addUploadImg(){
	mt++;
	var reg = /.*uploadFile\('([^']*)',.*/g;
	var maindocid = $("uploadFile").innerHTML.replace(reg,"$1");
	$("uploadFile").append("<hr/><div class=\"div_btn_upload\" href=\"uploadFile('"+maindocid+"','imgid"+mt+"')\">上传</div><input type=\"camera\" isshowclear=\"true\" name=\"imgid"+mt+"\" id=\"imgid"+mt+"\" style=\"width:65%\"/><img src=\"res:image/icon/add.png\" style=\"width:40dp;\" href=\"addUploadImg()\"/>");
}

function gomain(){
	Util.getWindowById("main").document.getElementById("mainshuaxin").click();
	Util.execScript("script:close");
}