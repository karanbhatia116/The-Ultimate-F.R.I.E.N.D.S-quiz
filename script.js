var flashmessages = ["How you doin?","Are you ready to take the quiz?","Let's Go!!"];
var flashMsg = document.querySelector(".flash-msgs");
var counter = 0;
var flag = false;
var question = $('.question');
var input = $('.input');
var questionContent = $('.question-content');
var questionNo = $('.question-no');
var score = 0;
var myTimer;
const questions = [
{
	number : 1,
	question: "Who worked as a cologne spritzer during season 2 ?",
	answers: {
		a: "Joey",
		b: "Ross",
		c: "Chandler",
		d: "Rachel"
	},
	correctAns: "a"
},
{
	number: 2,
	question:"What was the name of the favourite song of pet owned by Ross?",
	answers: {
		a: "Dance Monkey",
		b: "The Lion sleeps tonight",
		c: "Bungle in the Jungle",
		d: "Walking in the Jungle"
	},
	correctAns: "b"
},
{
	number: 3,
	question:"Whose job was to be concerned with weekly estimated net usage statistics?",
	answers: {
		a: "Ross",
		b: "Monica",
		c: "Chandler",
		d: "Rachel"
	},
	correctAns: "c"
},
{
	number:4,
	question:"What was Joey's penguin's name?",
	answers: {
		a: "Huggsy",
		b: "Waddle",
		c: "Bugsy",
		d: "Snowflake"
	},
	correctAns: "a"
},
{
	number:5,
	question:"Which cartoon character was on Phoebe's thermos that Ursula threw under the bus?",
	answers: {
		a: "Yogi Bear",
		b: "Judy Jetson",
		c: "Bullwinkle",
		d: "Pebbles Flintstone"
	},
	correctAns: "d"
},
{
	number:6,
	question:"What was the name of Chandler's mom?",
	answers: {
		a: "Nora Bing",
		b: "Marie Bing",
		c: "Angela Bing",
		d: "Jessy Bing"
	},
	correctAns: "a"
},
{
	number:7,
	question:"What was Monica's apartment number?",
	answers: {
		a: "3",
		b: "5",
		c: "18",
		d: "15"
	},
	correctAns: "b"
},
{
	number:8,
	question:"Why do Phoebe and David(the scientist guy) breakup?",
	answers: {
		a: "He hits Monica",
		b: "He moves to Minsk",
		c: "He's married",
		d: "He won't kiss her"
	},
	correctAns: "b"
},
{
	number:9,
	question:"What did Amy do to Emma when she was babysitting her?",
	answers: {
		a: "Put make up on her",
		b: "Make her cry",
		c: "Feed her sushi",
		d: "Pierce her ears"
	},
	correctAns: "d"
},
{
	number:10,
	question:"Who potrayed Ross and Monica's father?",
	answers: {
		a: "Brian Benben",
		b: "Alan Alda",
		c: "Elliot Gould",
		d: "Tom Selleck"
	},
	correctAns: "c"
}
];
var currentQuestion = 0;

function changeFlashMsg(){
	if(counter===0)
	{
		$('.flash-msgs').fadeIn('slow',function(){
			counter++;
		});
	}
	else if(counter!==flashmessages.length)
	{
		$('.flash-msgs').fadeOut('fast',function(){
		$(this).text(flashmessages[counter]);
		$(this).fadeIn('fast',function(){
		counter++;
		})
	});
   }
   else if(counter===flashmessages.length)
   {
   	$('.flash-msgs').fadeOut('fast');
   	flag = true;
		
		question.fadeIn('fast');
		input.fadeIn('fast');
   }
}
function changeQuestion(){
	questionContent.text(questions[currentQuestion].question);
	var num = currentQuestion+1;
	var str = num.toString();
	questionNo.text(str.concat(". "));
	$("#a").text(questions[currentQuestion].answers.a);
	$("#b").text(questions[currentQuestion].answers.b);
	$("#c").text(questions[currentQuestion].answers.c);
	$("#d").text(questions[currentQuestion].answers.d);
	$("#num").text(currentQuestion+1);
}
$(document).ready(function(){
	
	 changeQuestion();
	 myTimer=setInterval(changeFlashMsg,2000);
});
function updateScore(radioValue)
{
	var scoreEl = $("#score");
	if(currentQuestion<questions.length && questions[currentQuestion].correctAns === radioValue && score<=questions.length)
		{
			score++;
			flashMsg.style.display = "block";
			flashMsg.textContent = "Correct!!";
		}
	else
	{
		flashMsg.style.display = "block";
		flashMsg.textContent = "Incorrect";
	}
	scoreEl.text(score);

}
$("button").click(function(){
 var radioValue = $("input[name='answer']:checked").val();
 if(radioValue)
     {
     	if(currentQuestion===questions.length-2)
     	{
     		document.querySelector("button").textContent = "Submit";
     		updateScore(radioValue);
     		currentQuestion++;
     		changeQuestion();
     		document.querySelector('input[name="answer"]:checked').checked = false;
     	}
     	else if(currentQuestion<questions.length-1)
     	{
     		updateScore(radioValue);
     		currentQuestion++;
     		changeQuestion();
     	    document.querySelector('input[name="answer"]:checked').checked = false;
     	}
     	else if(currentQuestion===questions.length-1)
     	{
     		updateScore(radioValue);
     		currentQuestion++;
     	    document.querySelector('input[name="answer"]:checked').checked = false;
     	    clearInterval(myTimer);
     	    $('.question').remove();
     	    $('.input').hide();
     	    flashMsg.textContent = "Your score is "+score+"/10";
     	    flashMsg.fadeIn(600); //in milliseconds

     	}
     }
 else
    {
    	flashMsg.style.display = "block";
    	flashMsg.textContent = "Please select an option from below!";
    }
});





