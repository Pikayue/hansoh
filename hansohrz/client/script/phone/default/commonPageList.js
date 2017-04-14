var initDo=false;
var nextPageUrl="";
var totalPage ="";
function showList(ajax)
{
	var responsetext = ajax.responseText.toJSON();
	if(responsetext.mailList.length ==0){
	    $("contains").html("<div style=\"text-align:center;text-valign:middle;width:100%;height:100%;color#000000\">暂无数据！</div>").show();
	}else{
	    $("contains").clear().provide(responsetext.mailList).show();
	}
	if(responsetext.nextPageUrl !=""){
		nextPageUrl = responsetext.nextPageUrl;
		totalPage = responsetext.totalPage
	}
	$("searchParam").clear().provide(responsetext.param);
	$("loading").hide()
	$("searchAll").show();
	$('searchCon').hide();
	$('searchDiv').show();
	$("subject_div").value="";
	$("subject_con").value ="";
	$("dragrefreshbottom").disabled = false;
}
var num=1;
function loadMore(){
	  if(nextPageUrl ==""){
		  $("dragrefreshbottom").setDisplay();
	  }else if(num >= parseInt(totalPage)){
		  $("dragrefreshbottom").setDisplay();
		  endPage();
	  }else{
		num++;
		var reg = /index=(\d+)/g;
	    var url = nextPageUrl.replace(reg,"index="+num+"");
	    var method = "get";
	    var data = "";
	    var requestHeader = '{"Content-Type":"application/x-www-form-urlencoded","Accept-Language":"zh-cn"}';
	    var isShowProgress = false;
	    var dajax = new Ajax(url,method,data,getMoreListResult,failFunction,requestHeader,isShowProgress);						
	    dajax.send();
	  }
  }
function getMoreListResult(ajax)
{
	var responsetext = ajax.responseText.toJSON();
    $("contains").provide(responsetext.mailList);
	$("dragrefreshbottom").setDisplay();
}

//查询邮件
function searchMail(){
  if($("subject_div").value !=""){
	  $("subject_con").value = $("subject_div").value;
  }else{
	  $("subject_div").value="";
  }
  if($("from").value=="" )//人名为空时  id设置为空
  {
  	  $("fromhrmid").value="";
  }else if ($("from").value!="" && $("fromhrmid").value=="")//人名不为空时  id为空时 弹出选择id页面
  {
  	getForm();
  	return;
  }
  if($("to").value=="")
  {
  	  $("tohrmid").value="";
  }else if ($("to").value!="" && $("tohrmid").value=="")//人名不为空时  id为空时 弹出选择id页面
  {
  	getTo();
  	return;
  }
   var form1 = $("form1");
   form1.success = showList;
   form1.fail = failFun;
   form1.submit()
   $("loading").show();
}

function failFun(){
	$("loading").hide();
	alert("查询失败，请重新尝试！");
	return;
	
}

function endPage(){
    var toast = new Toast();
    toast.setText("已是最后一页");
    toast.setDuration(2000);
    toast.show();
}

function openMail(str){
	  if(str =="write"){
	     "initUrl".session("http://carefree/email/new/MailAdd.jsp?isInternal=1");
	     "mailtype".session("写邮件");
	     window.open("res:page/mail/writeMail.xhtml",true);
	  }else{
		  if(str =="inbox"){
		     "initUrl".session("http://carefree/email/new/MailInboxList.jsp?folderid=0&receivemailid=0&receivemail=true&"+(new Date().getTime()));
		     "mailtype".session("收件箱");
		  }else if(str =="sendbox"){
		     "initUrl".session("http://carefree/email/new/MailInboxList.jsp?folderid=-1&"+(new Date().getTime()));
		     "mailtype".session("发件箱")
		  }else if(str =="draftsbox"){
		     "initUrl".session("http://carefree/email/new/MailInboxList.jsp?folderid=-2&"+(new Date().getTime()));
		     "mailtype".session("草稿箱")
		  }else if(str =="trashbox"){
		     "initUrl".session("http://carefree/email/new/MailInboxList.jsp?folderid=-3&"+(new Date().getTime()));
		     "mailtype".session("垃圾箱")
		  }else if(str =="starbox"){
		     "initUrl".session("http://carefree/email/new/MailInboxList.jsp?star=1&"+(new Date().getTime()));
		     "mailtype".session("星标邮件");
		  }
		  "mailId".session(str)
		  var groupObj = Util.getHtmlGroupById("group_mail");
	      groupObj.refreshMainPage("res:page/mail/receiveList.xhtml");
	      groupObj.refreshRightPage("res:page/mail/right.xhtml");
	      groupObj.hideRightPage();
	  }
}