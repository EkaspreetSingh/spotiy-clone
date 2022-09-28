console.log("hello world");

// Initialize the variables
songIndex = 0;
let audioElement = new Audio('assets/songs/1.mp3');
audioElement.volume = 0.2;
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let volumeBar = document.getElementById('volumeBar');
let playingGif = document.getElementById('playingGif');
let FAvolumeicon = document.getElementById('FAvolumeicon');
let volumecontainer = document.getElementById('volumecontainer');
let card = Array.from(document.getElementsByClassName('card'));
let cover = Array.from(document.getElementsByClassName('cover'));
let bottomSongName = document.getElementById('bottomSongName');
bottomSongName.innerText = "song name1";

let songs = [
    {songName:"song name1", filePath:"assets/songs/1.mp3", coverPath: "assets/covers/1.jpg"},
    {songName:"song name2", filePath:"assets/songs/2.mp3", coverPath: "assets/covers/2.jpg"},
    {songName:"song name3", filePath:"assets/songs/3.mp3", coverPath: "assets/covers/3.jpg"},
    {songName:"song name4", filePath:"assets/songs/4.mp3", coverPath: "assets/covers/4.jpg"},
    {songName:"song name5", filePath:"assets/songs/5.mp3", coverPath: "assets/covers/5.jpg"},
    {songName:"song name6", filePath:"assets/songs/6.mp3", coverPath: "assets/covers/6.jpg"},
    {songName:"song name7", filePath:"assets/songs/7.mp3", coverPath: "assets/covers/7.jpg"},
    {songName:"song name8", filePath:"assets/songs/8.mp3", coverPath: "assets/covers/8.jpg"},
    {songName:"song name9", filePath:"assets/songs/9.mp3", coverPath: "assets/covers/9.jpg"}
]

cover.forEach((element, i)=> {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})
card.forEach((element, i)=> {
    // console.log(element, i);
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;
})
card.forEach((element, i)=> {
    element.addEventListener('click', (element1)=>{
        audioElement.src = songs[i].filePath;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        playingGif.style.opacity=1;
    })
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        playingGif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        playingGif.style.opacity=0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update seekbar
    let progressPercent = parseInt((audioElement.currentTime/audioElement.duration)*500);
    progressBar.value = progressPercent;
})

// updating time/volume of song when progress Bar/volum Bar is updated
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value/500)*audioElement.duration;
})
volumeBar.addEventListener('change', ()=>{
    audioElement.volume = volumeBar.value/100;
    // if(volumeBar.value<15) {
    //     FAvolumeicon.classList.remove('fa-volume-low');
    //     FAvolumeicon.classList.add('fa-volume-off');
    // }
    // else if(volumeBar.value<40 && volumeBar.value>15) {
    //     FAvolumeicon.classList.remove('fa-volume-off');
    //     FAvolumeicon.classList.add('fa-volume-low');
    // }
    // else if(volumeBar.value>40 && volumeBar.value<66) {
    //     volumecontainer.add('volumeIcon');
    // }
})




