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
        
		// 检验unid的合法性
		if (tempstr.length = 32){
			var url= "http://mail_domain"+dbname + "wDelete?openagent&" + tempstr + "&From=" + viewName + start;
			var requestHeader = '{"Content-Type":"application/x-www-form-urlencoded","Accept-Language":"zh-cn"}';
			var exmobiAjax = new Ajax(url,'get','',deleteCallBack,failFunction,requestHeader,true);
				exmobiAjax.send();
	        }
	}
}
function deleteCallBack(ajax)
{
	 window.close();
	 Util.getWindowById("sendboxlist").document.getElementById("shuaxin").click();
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
	StrUrl = "http://mail_domain"+strLink+StrUrl+"&tarfolder="+strtmp+"&docurl=http://mail_domain"+Util.base64Decode("detailUrl".session());
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
		   $("Body").value="<div style=\"FONT-SIZE: 10pt\"><pre>"+$("BodyT").value+ "<br/>"+$("Body").value+"</pre></div>";
	   }
	   else
	   {
		   $("Body").value= $("BodyT").value+ "\r\n\r\n"+$("Body").value;
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
		Util.goHtmlPageById("sendboxList");
		Util.getWindowById("sendboxlist").document.getElementById("shuaxin").click();
	}
 //************************END**************************************
