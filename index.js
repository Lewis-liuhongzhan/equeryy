$(document).ready(function(){
	var a,b,p,c;
	$(".btn1").click(function(){
		$(this).css({"color":"#FFFFFF","background":"#108EE9","border":"0"});
		$(".btn2").css({"color":"#999999","background":"#fff","border":"0.01rem solid #DDDDDD"});
		$("#p2").show();
		$("#p3").hide();
		 $("input").val("");
		 $(".btn3").css({"opacity":"0.5"});
	});
	$(".btn2").click(function(){
			$(this).css({"color":"#FFFFFF","background":"#108EE9","border":"0"});
			$(".btn1").css({"color":"#999999","background":"#fff","border":"0.01rem solid #DDDDDD"});
			$("#p3").show();
			$("#p2").hide();
			 $("input").val("");
			 $("select").val("");
       $(".btn3").css({"opacity":"0.5"});
	});
	 $("input[name='ms']").on("input",function(){
			 var p = $("input[name='ms']").val();
			 if(p !=='undefined'){
					 $(".btn3").css({"opacity":"1"});
            
			 }else{
					 $(".btn3").css({"opacity":"0.5"});
	    }
	});
	 $("input[name='mv']").on("input",function(){
			 var p = $("input[name='mv']").val();
			 if(p !==''){
			 $(".btn3").css({"opacity":"1"});

			}else{
			 $(".btn3").css({"opacity":"0.5"});
			}
	});
	 $(".btn3").click(function(){
				

				a = $("input[name='ms']").val();
				b=$("select").val();
				c= $("input[name='mv']").val();
				if(a !==''){
			 $(".form").append("<p>姓名/电话："+a+"</p><br/>");
			 $("input").val("")
			 $(".main").hide();
				$(".form").show();
				$(".form p:last").data("ms",a);
				$(this).css({"opacity":"0.5"});
			}else if(b!==null && c!==''){
			 $(".form").append("<p>运单号："+b+c+"</p><br/>");
			 $("input").val("")
			 $("select").val("");
			 $(".main").hide();
				$(".form").show();
				$(".form p:last").data("mv",c);
				$(".form p:last").data("option:selected",b);
				$(this).css({"opacity":"0.5"});
			}else if(b==null){
				$(".form").append("<p>运单号："+c+"</p><br/>");
         $("input").val("")
			 $(".main").hide();
				$(".form").show();
				$(".form p:last").data("mv",c);
				$(this).css({"opacity":"0.5"});
			}else{
				return("false");

			}

	});
	 $(".form").on("click","p",function(){
        var x=$(this).data("ms");
        if(x==undefined) {
        	var y=$(this).data("mv");
        	var z=$(this).data("option:selected");
        	$(".btn1").click();
				$("select").val(z);
				 $("input[name='mv']").val(y);
				 $(".btn3").css({"opacity":"1"});
				}else{
					$(".btn2").click();
					$("input[name='ms']").val(x);
					$(".btn3").css({"opacity":"1"});
				}
	 });

	 $(".header .top_right").click(function(){

				$(".main").show();
				$(".form").hide();
				$(".form").empty();
	 });
});
