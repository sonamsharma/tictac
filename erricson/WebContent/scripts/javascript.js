$(document).ready(function(){
	$(".cell").click(function(){
	var random = Math.random();
	if(random > .5){
		$(this).text("X");
	}else{
		$(this).text("O");
	}
	 var status = getValue();
	 
	 sendStatus(status);
	}
	
	);
	$("#reset").click(function(){
		$(".cell").text("");
	});
	 
	function getValue(){
		var one = $("#one").text();
		var two = $("#two").text();
		var three = $("#three").text();
		var four = $("#four").text();
		var five = $("#five").text();
		var six = $("#six").text();
		var seven = $("#seven").text();
		var eight = $("#eight").text();
		var nine = $("#nine").text();
		
		if(one == ""){
            one = "+";
        }
        if(two == ""){
           two ="+";
        }
        
        if(three == ""){
            three = "+";
        }
        if(four == ""){
           four ="+";
        }
        
    	if(five == ""){
            five = "+";
        }
        if(six == ""){
           six ="+";
        }
        
        if(seven == ""){
            seven = "+";
        }
        if(eight == ""){
           eight ="+";
        }
		
		var status = one+two+three+four+five+six+seven+eight+nine;
		return status;
	}
	
	function sendStatus(status){
	var jqxhr = $.get("http://xeo.com/ericsson/tictactoe.php?check="+status, 
			function(){
	});
	jqxhr.done(function(data){
		var response = data;
		if(response == "-2"){
			alert("You Lost this time");
		}else if(response =="-1")
		{alert("It's a draw");
		}else if(response =="1"){
			alert("You Won this game");
		}else if(response == "0"){
		}
	});
	jqxhr.fail(function(data){
		alert("Connection could not be stablished.");
	});
	}
});