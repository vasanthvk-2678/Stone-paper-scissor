let userscore=0;
let computerscore =0;
const userscore_span=document.getElementById("user-score");
const computer_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const stone_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcomputerchoice(){
	const choices=["r","p","s"];
	const randomnumber=math.floor(math.random()*3);
	return choices[randomnumber];
}
function converttoword(letter)
{
	if(letter == "r") return "stone";
	if(letter == "p") return "paper";
	return "scissor";
}
function win(userscore,computerscore){
	userscore++;
	userscore_span.innerHTML=userscore;
	computerscore_span=computerscore;
	const smalluserword="user".frontsize(3).sub();
	const smallcomputerword="comp".frontsize(3).sub();
	result_p.innerHTML=`${converttoword(userschoice)}${smalluserword} beats ${converttoword(computerchoice)}${smallcomputerword}.you win!.`;

}
function lose(userscore,computerscore){
	computerscore++;
	userscore_span.innerHTML=userscore;
	computerscore_span=computerscore;
	const smalluserword="user".frontsize(3).sub();
	const smallcomputerword="comp".frontsize(3).sub();
	result_p.innerHTML=`${converttoword(userschoice)}${smalluserword} loses to ${converttoword(computerchoice)}${smallcomputerword}.you lost!.`;

}
function draw(userscore,computerscore){
	userscore++;
	userscore_span.innerHTML=userscore;
	computerscore_span=computerscore;
	const smalluserword="user".frontsize(3).sub();
	const smallcomputerword="comp".frontsize(3).sub();
	result_p.innerHTML=`${converttoword(userschoice)}${smalluserword} beats ${converttoword(computerchoice)}${smallcomputerword}.you win!.`;

	
}
function game(userchoice){
	const computerchoice=getcomputerchoice();
	switch(userchoice+computerchoice)
	{
		case "rs":
		case "pr":
		case "sp":
			win();
			break;
		case "rp":
		case "ps":
		case "sr":
			lose();
			break;
		case "rr":
		case "pp":
		case "ss":
			draw();
			break;
	}
}
function main()
{
	stone_div.addEventListener("click",function(){
		game("r");
	})
	paper_div.addEventListener("click",function(){
		game("p");
	})
	scissor_div.addEventListener("click",function(){
		game("s");
	})
}

