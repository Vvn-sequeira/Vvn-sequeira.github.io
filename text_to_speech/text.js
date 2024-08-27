// text to speech
alert("vivian is here")

function speak(){
var text= document.getElementById('speech').value;
var utterance= new SpeechSynthesisUtterance(text);
speechSynthesis.speak(utterance);
}