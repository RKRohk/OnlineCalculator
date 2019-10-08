for(var i=1;i<=3;i++){
    for(var j=1;j<=3;j++){
        $("<button class='numberButton' id='button"+i+"'>"+i+"</button>").appendTo("#calculatorDiv");
        $("<br>").appendTo("#calculatorDiv");
    }
}