alert("Please Low the Device Volume");
var audio = document.createElement('audio');
audio.setAttribute('src','sound.mp3');
audio.loop = true; 
audio.play();