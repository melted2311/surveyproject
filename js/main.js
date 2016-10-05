
var surveyArray = new Array

//function to check user submission

function submitForm() {
var check = document.getElementsByClassName("q1")

var select = document.getElementsByClassName("q2")

var radio = document.getElementsByClassName("q3")

//store element by id to display results later
var result = document.getElementById("result")

//create array for checkbox answers this will become the value for var answer1
var checkboxesArray = []
//create variables to eventually hold the users answers
var answers1, answers2, answers3

//loop through all check boxes
for(var i = 0; i < check.length; i++) {

	//check if the current checkbox has been checked by the user, then do this
	if(check[i].checked) {
		//add item to checkboxesarray
		checkboxesArray.push(check[i].value)
	}
	console.log(checkboxesArray)
	answers1 = checkboxesArray
}
//stop function if no data for question1
if(answers1.length == 0) {
	//add a class of success/failure to results
	result.className = "failure"
	//update text content of results
	result.textContent = "you forgot to answer question 1"
	//stop function if no answer
	return
}

//confirm answer 1value
console.log("answer 1: " + answers1)

//loop through select options
for (var i = 0; i < select.length; i++) {

	//check which was selected by the user, do this
	if(select[i].selected) {
		//set value of answer 2 to the value in the selected item
		answers2 = select[i].value
	}
}

//stop funtion if no data for question 2
	if(answers2 == "") {
		//add a class of success/failure to results
		reslut.className = "failure"

		//update the text content of results
		result.textContent = "you forgot to answer question 2"

		//stop function if no answer
		return
	}

//confirm answer 2 value
console.log("answer 2: " + answers2)

//loop through radio options
for (var i = 0; i < radio.length; i++) {

	//if the radio was selected by the user do this
	if(radio[i].checked) {
		//set value of answer 3 to the value in the radio item
		answers3 = radio[i].value
	}
}


//stop funtion if no data for question 3
if(answers3 == undefined) {
	
	//add a class of success/failure to results
	result.className = "failure"
	
	//update the text content of results
	result.textContent = "you forgot to answer question 3"

	//stop function if no answer
	return
}

//confirm answer 3 value
console.log("answer 3: " + answers3)

//create an object from user answers
var surveyAnswer = {
	checked: answers1,
	select: answers2,
	radio: answers3
}

//add a class of success to results
result.className = "success"

//update the text content of results upon survey completion
result.textContent ="Thanks for completing the Survey"

//confirm new objects existence
console.log("current survey answers: #1 " + surveyAnswer.checked + " #2 " + surveyAnswer.selected + " #3 " + surveyAnswer.radio)


//add surveyAnswers to surveyArray
surveyArray.push(surveyAnswer)

//check survey array to confirm new object
console.log(surveyArray)

//reset form for next user
form.reset()
}

//add event to submitButton
document.getElementById("submitButton").addEventListener("click", submitForm, false)













