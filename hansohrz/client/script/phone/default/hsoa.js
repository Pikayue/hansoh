function delEdivs(id,text,name)
{
	$(name+"_text").innerHTML = $(name+"_text").innerHTML.replace("<ediv class=\"edivs\" href=\"delEdivs('"+id+"','"+text+"','"+name+"')\">"+text+"</ediv>","");
	var tnValue = $(name).value;
	//判断ID的位置是否在中间
	if(tnValue.indexOf(","+id+",") !=-1){
		$(name).value = $(name).value.replace(","+id+",",",");
	//判断ID的位置是否在最前面
	}else if($(name).value.substring(0,id.length) ==id){
		$(name).value = ($(name).value).substring(id.length);
		if($(name).value.substring(0,1) ==","){
			$(name).value = ($(name).value).substring(1);
		}
	//判断ID的位置是否在最后面
	}else if($(name).value.substring($(name).value.indexOf(id),$(name).value.length) ==id){
		$(name).value = ($(name).value).substring(0,$(name).value.indexOf(id));
		if($(name).value.substring($(name).value.length-1) ==","){
			$(name).value = $(name).value.substring(0,$(name).value.length-1);
		}
	}
}
/**
 ** 加法函数，用来得到精确的加法结果
 ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 ** 调用：accAdd(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
function accAdd(arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

function showButton(bt){
	var footerStr ="";
	var btwidth;
	if(bt.indexOf("转下一步")>=0&&bt.indexOf("暂存")>=0&&bt.indexOf("退回")>=0&&bt.indexOf("会签")>=0&&bt.indexOf("强制收回")>=0){
		btwidth="20%";
	}else{
		btwidth="25%";
	}
	if(bt.indexOf("转下一步")>=0)
	{
		footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('submit')\"><img src=\"res:image/icon/pizhun.png\" /><br size='3'/>转下一步</div>";
	}
	if(bt.indexOf("分发")>=0)
	{
		footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('submit')\"><img src=\"res:image/icon/pizhun.png\" /><br size='3'/>分发</div>";
	}
	if(bt.indexOf("提交")>=0)//会签提交
	{
		footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('hqsubmit')\"><img src=\"res:image/icon/pizhun.png\" /><br size='3'/>提交</div>";
	}
	if(bt.indexOf("已阅")>=0)
	{
		footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('submit')\"><img src=\"res:image/icon/pizhun.png\" /><br size='3'/>已阅</div>";
	}
	if(bt.indexOf("暂存")>=0)
	{
	    footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('save')\"><img src=\"res:image/icon/save.png\" /><br size='3'/>暂存</div>";
	}
	if(bt.indexOf("保存")>=0)
	{
	    footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('save')\"><img src=\"res:image/icon/save.png\" /><br size='3'/>保存</div>";
	}
	if(bt.indexOf("退回")>=0)
	{
		footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('reject')\"><img src=\"res:image/icon/reply.png\" /><br size='3'/>退回</div>";
	}
	if(bt.indexOf("会签")>=0)
	{
		footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('zf')\"><img src=\"res:image/icon/forword.png\" /><br size='3'/>会签</div>";
	}
	if(bt.indexOf("强制收回")>=0)
	{
		footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('qzhs')\"><img src=\"res:image/icon/forword.png\" /><br size='3'/>强制收回</div>";
	}
	if(bt.indexOf("删除")>=0)
	{
		footerStr+="<div style=\"width:"+btwidth+";text-align:center;color:#005784;font-size:17dp;\" href=\"submit('delete')\"><img src=\"res:image/icon/del.png\" /><br size='3'/>删除</div>";
	}
	$("footer").html(footerStr);
}
//提交
 function submit(type){
	    	//退回
	    	if(type=="reject"){
	    		var rejecturl="http://hsoa/workflow/request/RejectNodeSet.jsp?requestid="+$("requestid").value+"&workflowid="+$("workflowid").value+"&nodeid="+$("nodeid").value+"&isrejectremind=1&ischangrejectnode=&isselectrejectnode=1&splitflag=,";
	    		window.setStringSession("rejecturl",rejecturl);
	    		window.open("res:page/workflow/rejectNodeSet.uixml");
	    		return;	
	    	}
	    	//会签
	    	if(type=='zf')
			{
				window.open("res:page/workflow/zf.xhtml",true,false,"","id="+requestid);
				return;
			}
			//强制回收
	    	if(type=="qzhs"){
	    		qzhs();
	    		return;
	    	}
	    	//正常提交地址
	    	$("form1").action="http://hsoa/workflow/submit.jsp";
	    	//删除
	    	if(type=="delete"){
	    		$("form1").action="http://hsoa/workflow/delete.jsp";
	    	}
	    	//暂存
	    	if(type=="save"){
	    		$("form1").action="http://hsoa/workflow/zancun.jsp";
	    	}
	    	//会签提交
	    	if(type=="hqsubmit"){
	    		$("form1").action="http://hsoa/workflow/hqsubmit.jsp";
	    		type="save";
	    	}
	    	$("src").value=type;
	    	if($("remarkText10404")!=null){
	    		$("remarkText10404").value=$("remark").value;
	    	}
	    	
			$("form1").submit();
	    }
	    //审批意见相关
		function showallreceivedforsign(p1,p2,p3,p4,p5,p6,p7,p8)
		{
			divnameid=p6;
			var url = "http://hsoa/workflow/request/WorkflowReceiviedPersons.jsp";
			var method = "post";
		    var data ="requestid="+p1+"&viewnodeIds="+p2+"&operator="+p3+"&operatedate="+p4+"&operatetime="+p5+"&returntdid="+p6+"&logtype="+p7+"&destnodeid="+p8;
		    var requestHeader = '{"Content-Type":"application/x-www-form-urlencoded","Accept-Language":"zh-cn"}';
			var isShowProgress = true;
		    var ajax = new Ajax(url,method,data,showname,null,requestHeader,isShowProgress);						
		   	ajax.send();
		}
		function showname(data)
		{
			var rspData = data.responseText.toJSON();
			$(divnameid).innerHTML=rspData.name;
		}
		//强制回收
		function qzhs(){
			var url = "http://hsoa/workflow/qzhs.jsp";
			var method = "post";
		    var data ="id="+requestid;
		    var requestHeader = '{"Content-Type":"application/x-www-form-urlencoded","Accept-Language":"zh-cn"}';
			var isShowProgress = true;
		    var ajax = new Ajax(url,method,data,qzhssuccessFunction,formcallback,requestHeader,isShowProgress);						
		   	ajax.send();
		}
		function qzhssuccessFunction(data){
			alert("操作成功!",winClose);
		}
		//退回
		function doReject(){
	    	$("src").value="reject";
	    	if($("remarkText10404")!=null){
	    		$("remarkText10404").value=$("remark").value;
	    	}
			$("form1").submit();
	    }
	    //统一展示附件
		function showFileList(listJson){
			var size = listJson.length;
			if(size > 0){
				var fileStr = "<fileset id='fileId' caption='附件' size='3' hidetitle='true' style='background-color:white;border-color:#D8D8D8'>";
				var houzhui = "";
				for(var i = 0 ;i<listJson.length;i++){
					var numHz = (listJson[i].name).lastIndexOf(".");
					houzhui = (listJson[i].name).substring(numHz+1);
					var itemStr = "<item text='"+listJson[i].name+"' href='http://hsoa/weaver/weaver.file.FileDownload?fileid="+listJson[i].href+"&amp;download=1&amp;requestid="+listJson[i].id+"' ft='"+houzhui+"' options='001'></item>";
					fileStr+=itemStr;
				}
				fileStr+="</fileset>";
				$("file").append(fileStr);	
			}
		}
	//将input里面的数字转化为两位小数   2->2.00	
	function checkinput(id){
			var temp =$(id).value;
			temp =accAdd(temp,0);
			$(id).value=temp.toFixed(2);
		}
	//流程节点选人	
	function onShowResourceRole(id, url, linkurl, type1, roleid){
			"textId".session("field"+id+"_text");//显示的div的id
    		"nameId".session("field"+id);//隐藏的input的id
   			"htmlId".session("detail");
			var url="http://hsoa/hrm/resource/RoleResourceBrowser.jsp?roleid="+roleid;
			"selectUser".session(url);
			window.open("res:page/workflow/selectPeople.uixml");
		}
	//正文在另外一个页面打开
	function showbrowser(){
		window.open("res:page/bgqsl/showall.uixml",true,false,"","content="+browserdata);
	}