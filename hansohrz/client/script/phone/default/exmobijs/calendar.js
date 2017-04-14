/*
*	ExMobi4.0 JS 框架之 动态日程类calendar.js(依赖base.js和app.js和utility.js)
*	Version	:	1.0.0.6
*	Author	:	袁鸿乾
*	Email	:	yuanhongqian@nj.fiberhome.com.cn
*   Copyright 2014 (c) 南京烽火星空通信发展有限公司
*/




//两个参数，第一个是初始化数据为到某个div里面,第二个参数设置颜色
//divId,calendarColor,calendarClickColor,preyearHref,premonthHref,nextmonthHref,nextyearHref

var btnWidth="";
var btnRadius ="";
var btnMargin ="";
var screenwidth = Util.getScreenWidth();
if(screenwidth =="480" || screenwidth =="640" || screenwidth =="750"){
	btnWidth = "44";
	btnRadius = "0";
	btnMargin ="1"
}else{
	btnWidth = "50";
	btnRadius = "0";
	btnMargin ="1"
}

function $calendar(divId,calendarColor,calendarClickColor,preyearHref,premonthHref,nextmonthHref,nextyearHref,date,getdate){
	var nowmonth;
	var nowyear;
	var nowday;
	var itemData;
	
	var arr=new Array();
	
	
	if(date == "")
		{
		var nowdate = new Date();
		 nowmonth = nowdate.getMonth();
		 nowyear = nowdate.getFullYear();
		 nowday = nowdate.getDate();
		}
	else
		{
		 nowmonth = Number(date.split("-")[1])-1;
		 nowyear = Number(date.split("-")[0]);	
		 nowday = Number(date.split("-")[2]);
		}
	
	itemData = {"year":nowyear, "month":nowmonth+1};
	
	
	
	try{ $(); }catch(e){ alert("请先导入base.js和app.js"); return; }
	try{ $u; }catch(e){ alert("请先导入utility.js"); return; }
	
	if(document.getElementById(divId) == null)
		{
		 alert("Id不存在");
		 return;
		}
	
	var calendardiv = document.getElementById(divId);
	
	
	var calendarIntStr="<div  style=\"width:30%;text-align:center;margin:8 0\" id=\"idCalendarPre\"><img src='res:image/icon/previousbtn.png' clicksrc='res:image/icon/previousbtn_click.png' href=\""+premonthHref+"()\" style=\"width:20%\"/></div>"
							+"<div  style=\"width:40%;text-align:center;margin:8 0\" id=\"datetitle\">${year}年${month}月</div>" 
							+"<div  style=\"width:30%;text-align:center;margin:8 0\"><img src='res:image/icon/nextbtn.png' clicksrc='res:image/icon/nextbtn_click.png' href=\""+nextmonthHref+"()\" style=\"width:20%\"/></div><hr color='#D3E2F8'/>"
							+"<font style='text-align:center;margin:7 0;width:"+btnWidth+"'>日</font>"
							+"<font style='text-align:center;margin:7 0;width:"+btnWidth+"'>一</font>"
							+"<font style='text-align:center;margin:7 0;width:"+btnWidth+"'>二</font>"
							+"<font style='text-align:center;margin:7 0;width:"+btnWidth+"'>三</font>"
							+"<font style='text-align:center;margin:7 0;width:"+btnWidth+"'>四</font>"
							+"<font style='text-align:center;margin:7 0;width:"+btnWidth+"'>五</font>"
							+"<font style='text-align:center;margin:7 0;width:"+btnWidth+"'>六</font>"
							+"<br/><hr color='#D3E2F8'/><div style='text-align:center;width:100%;' id=\"calendarcontent\"/>";			
	
	calendardiv.innerHTML = calendarIntStr;
	$("datetitle").clear().provide(itemData).show();
	
	var calendar = {};
	calendar.draw=function(){
		
		var data = {};
		if(arguments[0] != null)
		{
			data = (typeof arguments[0])=="string"?arguments[0].toJSON():arguments[0];
			data = (data instanceof Array)?data:[data];
		}
		else
		{
			data = "";
		}
						
		itemData = {"year":nowyear, "month":nowmonth+1};			               		
		$("datetitle").clear().provide(itemData).show(); 		
		/*var tab = document.getElementById("mytable");
		var rows=tab.rowSize;*/
		//重新绘制日历时清空table
		
		$("calendarcontent").innerHTML = "";
		
		/*for(i=1;i<rows;i++){
			tab.deleteRow(1);
		}*/
		
		var firstDayd = new Date();
		
		var arrmonth =new Array();		
		if(nowyear % 4 == 0 && (nowyear % 100 != 0 || nowyear % 400 == 0))
			{		
			//闰年
			 arrmonth = [31,29,31,30,31,30,31,31,30,31,30,31];		 
			}
		else
			{
			//非闰年
			 arrmonth = [31,28,31,30,31,30,31,31,30,31,30,31];		
			}	
	
		
		//用当月第一天在一周中的日期值作为当月离第一天的天数 			
		firstDayd.setFullYear(nowyear,nowmonth, 1);
		
		var firstDay = firstDayd.getDay();	
		//上个月的天数
		var premonth;
		if(nowmonth == 0)
			{
			premonth = arrmonth[11];
			}
		else
			{
			premonth = arrmonth[nowmonth-1];		
			}
		
		for(var i = premonth-firstDay+1; i <= premonth; i++){
			arr.push("<input type='button' onclick='"+getdate+"(\""+nowyear+"-"+nowmonth+"-"+i+"\")' disabled='true' ispersistnormal='true' style='align:center;width:"+btnWidth+"dp;height:"+btnWidth+"dp;text-align:center;border-radius:"+btnRadius+"dp;margin:"+btnMargin+";color:#aaaaaa' value='' />");
		}		
		//用当月最后一天在一个月中的日期值作为当月的天数 
		var dd = new Date();	
		
		for(var i = 1; i <= arrmonth[nowmonth]; i++){			
			var arrstr = "";	
			if(data.length == 0)
			{
				if(dd.getDate() == i && dd.getFullYear() == nowyear && dd.getMonth() == nowmonth)
				{
				//当前日期用颜色标注（当前日期=今天!=传进来的日期）
					//if(i == nowday)
						//{
						arrstr = "<input type='button' id='"+nowyear+"-"+Number(nowmonth+1)+"-"+i+"'  onclick='"+getdate+"(\""+nowyear+"-"+Number(nowmonth+1)+"-"+i+"\")' style='align:center;background-color:#E877AF;background-click-color:#A1D7F1;width:"+btnWidth+"dp;height:"+btnWidth+"dp;text-align:center;border-radius:"+btnRadius+"dp;margin:"+btnMargin+";color:#ffffff' value='"+i+"' />";
						//}
				}
			  else
				{		
				  if(i == nowday && nowyear == Number(date.split("-")[0]) && nowmonth == Number(date.split("-")[1])-1 )
					  {
					  arrstr = "<input type='button' id='"+nowyear+"-"+Number(nowmonth+1)+"-"+i+"' onclick='"+getdate+"(\""+nowyear+"-"+Number(nowmonth+1)+"-"+i+"\")' style='align:center;background-click-color:#A1D7F1;width:"+btnWidth+"dp;height:"+btnWidth+"dp;text-align:center;border-radius:"+btnRadius+"dp;margin:"+btnMargin+";color:#39ADE5' value='"+i+"' />";				 
						
					  }
				  else
					  {
					  
					  arrstr = "<input type='button' id='"+nowyear+"-"+Number(nowmonth+1)+"-"+i+"'  onclick='"+getdate+"(\""+nowyear+"-"+Number(nowmonth+1)+"-"+i+"\")' style='align:center;background-click-color:#A1D7F1;width:"+btnWidth+"dp;height:"+btnWidth+"dp;text-align:center;border-radius:"+btnRadius+"dp;margin:"+btnMargin+";color:#39ADE5'  value='"+i+"' />";				 
						
					  }
				
				}
				
			  }
			
			arr.push(arrstr);
		 }
			
			
		//计算下个月还有多少天在当月视图显示，以7x6=42个日期展现
		var nextDay = 42-arr.length;			
	    for(var i = 1; i <= nextDay; i++){		
			arr.push("<input type='button'   onclick='"+getdate+"(\""+nowyear+"-"+Number(nowmonth+2)+"-"+i+"\")'  disabled='true' ispersistnormal='true'  style='align:center;background-click-color:#A1D7F1;width:"+btnWidth+"dp;height:"+btnWidth+"dp;text-align:center;border-radius:"+btnRadius+"dp;margin:"+btnMargin+";color:#aaaaaa' value='' />");		
			} 
		
	  //  var tab=document.getElementById("mytable");
	   
	    window.beignPreferenceChange();	    
		while(arr.length > 0){ 
			
			
			
		   /* var tr=new TableRow();
		     var cols=tab.colSize;
		     var rows=tab.rowSize;*/
			
			for(var i = 1; i <= 7; i++){
			/* var td=new TableCell();
		       td.id="t"+rows+"c"+i;*/
		      
			if(arr.length > 0){
			var day = arr.shift();
			
			$("calendarcontent").append(day);
	         /*td.innerHTML=day;
	         tr.insertCell(td);	     */   	         
			}
			
						
		  }
			//每个星期插入一个tr 
			//tab.insertRow(tr);
			$("calendarcontent").append("<br/>");
		}
		window.endPreferenceChange();		
	};
	//上个月
	calendar.premonth = function()
	{
				
			  $("calendarlist").hide();
			   nowmonth = nowmonth -1;			
			if(nowmonth < 0)
				{
				nowyear = nowyear -1;
				nowmonth = 11;
				}
			  return calendar;
	};
	//上一年
	calendar.preyear = function()
	{	
			
			$("calendarlist").hide();
			nowyear = nowyear -1;
			return calendar;					
	};
	//下一年
	calendar.nextyear = function()
	{		
		$("calendarlist").hide();
		nowyear = nowyear + 1;
		return calendar;
	};
	//下个月
	calendar.nextmonth = function()
	{
		$("calendarlist").hide();
		nowmonth = nowmonth + 1;	
		if(nowmonth > 11)
		{
		nowyear = nowyear + 1;
		nowmonth = 0;
		}
		return calendar;
	};
	calendar.getList = function(data)
	{
		//data = [{"date":"2013-01-27","startTime":"12:50","endTime":"14:34","title":"岁的发放"},{"date":"2013-01-24","startTime":"12:50","endTime":"14:34","title":"ss岁的发放"}];
		$("calendarlist").clear().provide(data.toJSON()).show();		
		
	};
	calendar.provide = function()
	{
		
		if(arguments.length == 1){
			var data = {};
			if(arguments[0] != null)
			{
				data = (typeof arguments[0])=="string"?arguments[0].toJSON():arguments[0];
				data = (data instanceof Array)?data:[data];
			}
			else
			{
				data = "";
			}			
			 calendar.draw(data);
			 
		}
		
		//return calendar;
		
	}
	
	calendar.onSuccess = function(data)
	{		
		 calendar.draw(data.responseText.toJSON());		 
		// return calendar;
	}
	
	
  return calendar;
}

function premonthHref(){
	//上一月
	 var data = [];        
	 calendar.premonth().draw(data);
	 getMonth('previous');
}
function nextmonthHref(){
   
	var data = [];	 
	//下一月
	calendar.nextmonth().draw(data);
	getMonth('next');
}