console.log("Namaste!! Welcome to Spotify");

// Initialize song data
let songIndex = 0;
let songs = [
    {
        songName: "Tere Sang Yara",
        filePath: "songs/Tere sang yaara (Lyrics) - Atif Aslam.mp3",
        coverPath: "https://c.saavncdn.com/568/Tere-Sang-Yaara-Denny-The-Tropical-RnB-Mix-Hindi-2019-20190627171929-500x500.jpg"
    },
    {
        songName: "Jeene Laga Hoon",
        filePath: "songs/Jeene Laga Hoon (Lyrics) Ramaiya Vastavaiya.mp3",
        coverPath: "https://i1.sndcdn.com/artworks-000409074153-tpckpb-t500x500.jpg"
    },
    {
        songName: "Tere Hone Laga Hoon",
        filePath: "songs/Tera Hone Laga Hoon Lyrics.mp3",
        coverPath: "https://c.saavncdn.com/811/Tera-Hone-Laga-Hoon-Lofi-Mix-Hindi-2022-20250307181104-500x500.jpg"
    },
    {
        songName: "Pehli Dafa",
        filePath: "songs/Pehli Dafa Song - Atif Aslam.mp3",
        coverPath: "https://i.scdn.co/image/ab67616d0000b2733092613659a6cc26d492d46a"
    },
    {
        songName: "Piya Re O Piya",
        filePath: "songs/Piya O Re Piya Lyrical.mp3",
        coverPath: "https://i1.sndcdn.com/artworks-oYOtozgABGrHqmD5-wCMKlg-t500x500.jpg"
    },
    {
        songName: "Woh Lamhe Woh Baatein",
        filePath: "songs/Woh Lamhe Woh Baatein.mp3",
        coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsLLA4C1IYz3OSjdJlm8qINPDRtmioEuhhg&s"
    },
    {
        songName: "Dil Diyan Gallan",
        filePath: "songs/Dil Diyan Gallan - Atif Aslam.mp3",
        coverPath: "https://i1.sndcdn.com/artworks-000286998839-v9dmn9-t500x500.jpg"
    },
    {
        songName: "Tu Jaane Na",
        filePath: "songs/Tu Jaane Na - Atif Aslam.mp3",
        coverPath: "https://i.scdn.co/image/ab67616d0000b2733fc744278f09205afd1e23c4"
    }
];

let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let currentSongName = document.getElementById('currentSongName');

// Handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        currentSongName.innerText = songs[songIndex].songName;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek song using progress bar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});
