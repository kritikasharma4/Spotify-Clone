console.log("welcome to Melodysite")
let songIndex=0;
let audioElement=new Audio('Kesariya_64(PagalWorld.com.se).mp3');
let masterPlay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif1=document.getElementById('gif1');


let songs=[
    {songName:"let me down slowly", filePath:"C:\Users\91884\Desktop\first-bit\spotify\Kesariya_64(PagalWorld.com.se).mp3" , coverpath:"covers/1.jpg"},
    {songName:"let me down slowly", filePath:"C:\Users\91884\Desktop\first-bit\spotify\Kesariya_64(PagalWorld.com.se).mp3" , coverpath:"covers/1.jpg"},
    {songName:"let me down slowly", filePath:"C:\Users\91884\Desktop\first-bit\spotify\Kesariya_64(PagalWorld.com.se).mp3" , coverpath:"covers/1.jpg"},
    {songName:"let me down slowly", filePath:"C:\Users\91884\Desktop\first-bit\spotify\Kesariya_64(PagalWorld.com.se).mp3" , coverpath:"covers/1.jpg"},
    {songName:"let me down slowly", filePath:"C:\Users\91884\Desktop\first-bit\spotify\Kesariya_64(PagalWorld.com.se).mp3" , coverpath:"covers/1.jpg"},

    
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif1.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif1.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})


