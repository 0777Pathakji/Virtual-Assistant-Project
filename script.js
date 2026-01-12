    let btn=document.querySelector("#btn")
    let content=document.querySelector("#content")
    let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    // text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)

}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Sir")
    }else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
      voice.style.display="none"   
    if(message.includes("hello")||message.includes("hey Tulsi")){
        speak("hello Sir,What can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant,created By Tech dev ")
    }
    else if(message.includes("open youtube")){  
        speak("opening youtube.....")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google.....")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open facebook","_blank")){
        speak("opening facebook.....")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp.....")
        window.open("https://www.whatsapp.com/","_blank")
    }
    else if(message.includes("open siet")){
        speak("opening siet.....")
        window.open("https://siet.in/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator.....")
        window.open("calculator://")
    }
    else{
        speak(`this is what i found on internet regarding ${message.replace("Tulsi","")||message.replace("Tullsi","")}`)
        window.open(`https://www.google.com/search?q=${message.replace("Tulsi","")||message.replace("Tulsi","")}`)
    }
}
