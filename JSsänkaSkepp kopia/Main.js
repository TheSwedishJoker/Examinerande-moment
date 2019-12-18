var player1;
var player2;
var battleShipBoard = 100; //antal rutor för spelbrädet
var gameShips = [{shipName: "destroyer",shipLength: 2 }, //Lista på de olika skepp som spelet ska använda sig av
 {shipName: "submarine", shipLength: 3 },
 {shipName: "crusier",shipLength: 4 },
 {shipName: "battleship",shipLength: 5 }];

$(function theBoard(){ //funktion för att generera spelbrädet
		for (let i = 0; i <= battleShipBoard; i++) { //loop för att skapa spelbrädet
			var dropHere = i;
		if(0 < i) { //Loop för att skriva ut 100 rutor
			$(".boardGrid").append("<li class=' "+i+"'id="+ dropHere +"></li>");
		}		
		if (i < 11) {//loop för att skriva ut kordinaterna A-J
			$(".topRow" ).append("<span class='topRowClass'>" + String.fromCharCode(i + 64)+ "</span>");
		}
		if(i > 90){//loop för att skriva ut 1-10
			$(".leftRow").prepend("<span class='leftRowClass'>" + Math.abs(100-i+1) + "</span>");
		}
  }  
  for (let i = 0; i <= battleShipBoard; i++) {//loop för att skapa spelbrädet
		if(0 < i) {//Loop för att skriva ut 100 rutor
			$(".boardGrid2").append("<li class=''id="+i+"-2"+"></li>");
		}		
		if (i < 11) {//loop för att skriva ut kordinaterna A-J
			$(".topRow2" ).append("<span class='topRowClass2'>" + String.fromCharCode(i + 64)+ "</span>");
		}
		if(i > 90){//loop för att skriva ut 1-10
			$(".leftRow2").prepend("<span class='leftRowClass2'>" + Math.abs(100-i+1) + "</span>");console.log(i);
		}
  	}
})

$(function shipsBeforeGame(){ //funktion för att generera en lista på skeppen
  $(".placeShipsToBoard").append("<div class=gameShips></div>"); 
  $(".placeShipsToBoard2").append("<div class=gameShips2></div>");
	for (var i = 0; i < gameShips.length; i ++) { //loop genom listan av skeppen
		$("<div id="+gameShips[i].shipLength+" class="+gameShips[i].shipName+"></div>").appendTo(".gameShips");
    }
  for (var i = 0; i < gameShips.length; i ++) {//loop genom listan av skeppen
	$("<div id="+gameShips[i].shipLength+" class="+gameShips[i].shipName+"></div>").appendTo(".gameShips2");
    }
})

$(function clickGrid(){//funktion för att placera ut skeppen
	let storedShip;
	$(".gameShips div").click(function () { 
		storedShip = $(this).remove(); //sparar ner "skeppet"
	});
	$(".boardGrid li").click(function(){
		dropHere = $(this).attr("id"); //sparar ner ett id
		let endOfShip = parseInt(dropHere) + parseInt(storedShip.attr("id")); //gör till siffror och sparar 
			for (let i = dropHere; i < endOfShip; i++) {
				$("#" + i + "." +i).addClass("droppedShipPlace");	//skriver ut
			}
		storedShip=""; //tömmer 
	});
})

