var ttId="";
var tnId="";
function selectUser(textId, nameId, htmlId){
	ttId =textId;
	tnId = nameId;
	var url="";
	var ids = $(nameId).value;
	if(ids ==""){
		ids="0";
	}
	"textId".session(textId);
    "nameId".session(nameId);
    "htmlId".session(htmlId);
	//选择人员
	if(nameId=="internalto" || nameId=="internalcc" || nameId=="internalbcc"){
		url="http://carefree/hrm/resource/MutiResourceBrowser.jsp?resourceids="+ids+"&splitflag=,";
		"selectUser".session(url);
		window.open("res:page/selectUser/selectUser.xhtml",true);
	}else if(nameId=="internaltodpid" || nameId=="internalccdpid" || nameId=="internalbccdpid"){
		"selectedids".session(ids);
		url="http://carefree/hrm/tree/DepartmentMultiXML.jsp?deptlevel=0";
		"selectUser".session(url);
		window.open("res:page/selectUser/selectDept.xhtml",true);
	}else if(nameId=="memberIDs"){
		"selectedids".session(ids);
		url="http://carefree/hrm/resource/MutiResourceBrowser.jsp?resourceids="+ids+"&splitflag=,";
		"selectUser".session(url);
		window.open("res:page/selectUser/selectUser.xhtml",true);
	}
}

function selectAllUser(str){
	$(str+"_text").append("<ediv class=\"edivs\" href=\"delAllEdivs('"+str+"')\">所有人</ediv>");
	$(str+"all").value ="1";
}

function delAllEdivs(str){
	$(str+"_text").innerHTML = $(str+"_text").innerHTML.replace("<ediv class=\"edivs\" href=\"delAllEdivs('"+str+"')\">所有人</ediv>","");
	$(str+"all").value ="";
}

//判断是否有选择”所有人“

function isSendAllUser(){
	if($("internalto_text").innerHTML.indexOf("所有人") !=-1){
		$("internaltodpid").value ="0";
		$("internalto").value ="0";
		$("internaltoall").value ="1";
	}
	if($("internalcc_text").innerHTML.indexOf("所有人") !=-1){
		$("internalccdpid").value ="0";
		$("internalcc").value ="0";
		$("internalccall").value ="1";
	}
	if($("internalbcc_text").innerHTML.indexOf("所有人") !=-1){
		$("internalbccdpid").value ="0";
		$("internalbcc").value ="0";
		$("internalbccall").value ="1";
	}
	$("flag").value ="-1";
}

function delEdivs(id,text,name){
	var znName="";
	//日程安排的选人删除
	if(name =="memberIDs"){
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
	//邮件的选人删除
	}else{
		if(name=="internalto" || name=="internalcc" || name=="internalbcc"){
			znName = name+"hrmname";
		}else if(name=="internaltodpid" || name=="internalccdpid" || name=="internalbccdpid"){
			znName = name+"name";
		}
		
		//sxl添加2015-03-25
		if(name =="internaltodpid"){
			$("internalto_text").innerHTML = $("internalto_text").innerHTML.replace("<ediv class=\"edivs\" href=\"delEdivs('"+id+"','"+text+"','"+name+"')\">"+text+"</ediv>","");
		}else if(name =="internalccdpid"){
			$("internalcc_text").innerHTML = $("internalcc_text").innerHTML.replace("<ediv class=\"edivs\" href=\"delEdivs('"+id+"','"+text+"','"+name+"')\">"+text+"</ediv>","");
		}else if(name =="internalbccdpid"){
			$("internalbcc_text").innerHTML = $("internalbcc_text").innerHTML.replace("<ediv class=\"edivs\" href=\"delEdivs('"+id+"','"+text+"','"+name+"')\">"+text+"</ediv>","");
		}else{
			$(name+"_text").innerHTML = $(name+"_text").innerHTML.replace("<ediv class=\"edivs\" href=\"delEdivs('"+id+"','"+text+"','"+name+"')\">"+text+"</ediv>","");
		}
		
		var tnValue = $(name).value;
		//判断ID的位置是否在中间
		if(tnValue.indexOf(","+id+",") !=-1){
			$(name).value = $(name).value.replace(","+id+",",",");
			$(znName).value = $(znName).value.replace(","+text+",",",");
		//判断ID的位置是否在最前面
		}else if($(name).value.substring(0,id.length) ==id){
			$(name).value = ($(name).value).substring(id.length);
			$(znName).value = ($(znName).value).substring(text.length);
			if($(name).value.substring(0,1) ==","){
				$(name).value = ($(name).value).substring(1);
				$(znName).value = ($(znName).value).substring(1);
			}
		//判断ID的位置是否在最后面
		}else if($(name).value.substring($(name).value.indexOf(id),$(name).value.length) ==id){
			$(name).value = ($(name).value).substring(0,$(name).value.indexOf(id));
			$(znName).value = ($(znName).value).substring(0,$(znName).value.indexOf(text));
			if($(name).value.substring($(name).value.length-1) ==","){
				$(name).value = $(name).value.substring(0,$(name).value.length-1);
				$(znName).value = $(znName).value.substring(0,$(znName).value.length-1);
			}
		}
	}
}

//删除邮件
function delMail(id){
	var ids = $("accids").value;
	ids = ids.replace(","+id+",",",")
	$("accids").value= ids;
	$("#"+id).hide();
	
	var delids = $("delaccids").value;
	if(delids!=""){
		delids = delids+","+id;
	}else{
		delids = id;
	}
	$("delaccids").value = delids;
}
