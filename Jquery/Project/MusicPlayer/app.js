const playBtn = document.querySelector('#play-btn');
const progress = document.querySelector('#progress');
const songList = document.querySelector('#song-list');

let songs = [
    {
        name: 'Song1',
        id:1
    },
    {
        name: 'Song2',
        id:2
    },
    {
        name: 'Song3',
        id:3
    },
    {
        name: 'Song4',
        id:4
    }
]

const audio=new Audio('./Assets/Song1.mp3');
// show songs in ul
for(let song of songs){
    const li=document.createElement('li');
    li.innerText=song.name;
    li.setAttribute('id',song.id);
    li.classList.add('song-item'); // styling ke liye kiya hai
    songList.append(li);
}

// play button click
playBtn.addEventListener('click',function(){
    audio.paused ? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains('fa-circle-play')){
        playBtn.children[0].classList.remove('fa-circle-play');
        
        playBtn.children[0].classList.add('fa-circle-pause');

    }
    else{
        playBtn.children[0].classList.remove('fa-circle-pause');
        
        playBtn.children[0].classList.add('fa-circle-play');
    }
})


// current time ko dekho

audio.addEventListener('timeupdate',function(){
    const currentProgress=audio.currentTime *100/audio.duration;
    progress.value=currentProgress;
})

// input ko apne hisab se agge pichhe set kar dena

progress.addEventListener('change',function(){
    const updateTime = audio.duration * progress.value /100; // yah pe revse enginneering ki hai
    audio.currentTime = updateTime;
})

// ganna khud se kro select

songList.addEventListener('click',function(e){
    let songId=e.target.getAttribute('id'); // yeese id mil jayehe
    audio.src =`./assets/song${songId}.mp3`;
    audio.currentTime=0;
    audio.play();
    playBtn.children[0].classList.remove('fa-circle-play');
        
    playBtn.children[0].classList.add('fa-circle-pause');
})