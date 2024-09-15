const music = new Audio('audio/1.mp3');

const songs = [
    {
        id: 1,
        songName: ` Rafta Rafta<br>
        <div class = "subtitle">Atif Aslam</div>`,
        poster: "./Images/1.jpg"
    },
    {
        id: 2,
        songName: `Raat<br>
        <div class = "subtitle">Atif Aslam</div>`,
        poster: "./Images/2.jpg"
    },
    {
        id: 3,
        songName: `Ahista Ahista<br>
        <div class = "subtitle">Saaj Bhatt</div>`,
        poster: "./Images/3.jpg"
    },
    {
        id: 4,
        songName: `Aaj Phir<br>
        <div class = "subtitle">Shrey Singhal</div>`,
        poster: "./Images/4.jpg"
    },
    {
        id: 5,
        songName: `18 Saal<br>
        <div class = "subtitle">Deep Dosanjh</div>`,
        poster: "./Images/5.jpg"
    },
    {
        id: 6,
        songName: `Ek Mulaqat<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster: "./Images/6.jpg"
    },
    {
        id: 7,
        songName: `Lut Gaye<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster: "./Images/7.jpg"
    },
    {
        id: 8,
        songName: `Wild Flower<br>
        <div class = "subtitle">Billie Eilish</div>`,
        poster: "./Images/8.jpg"
    },
    {
        id: 9,
        songName: `Birds Of A Feather<br>
        <div class = "subtitle">Billie Eilish</div>`,
        poster: "./Images/9.jpg"
    },
    {
        id: 10,
        songName: `Ve Haniya Ve Dil Janiya<br>
        <div class = "subtitle">Neha Kakkar</div>`,
        poster: "./Images/10.jpg"
    },
    {
        id: 11,
        songName: `Maan Le<br>
        <div class = "subtitle">Arjit Singh</div>`,
        poster: "./Images/11.jpg"
    },
    {
        id: 12,
        songName: `Apna Bana Le<br>
        <div class = "subtitle">Arjit Singh</div>`,
        poster: "./Images/12.jpg"
    },
    {
        id: 13,
        songName: `Mehram<br>
        <div class = "subtitle">Arjit Singh</div>`,
        poster: "./Images/13.jpg"
    },
    {
        id: 14,
        songName: `Hua Hai Aj Pehli Baar<br>
        <div class = "subtitle">Armaan Malik</div>`,
        poster: "./Images/14.jpg"
    },
    {
        id: 15,
        songName: `Tu Hi Tu<br>
        <div class = "subtitle">Armaan Malik</div>`,
        poster: "./Images/15.jpg"
    },
    {
        id: 16,
        songName: `Paharon Ki Kasam<br>
        <div class = "subtitle">Ali Zafar</div>`,
        poster: "./Images/16.jpg"
    },
    {
        id: 17,
        songName: `Laila O Laila<br>
        <div class = "subtitle">Ali Zafar</div>`,
        poster: "./Images/17.jpg"
    },
    {
        id: 18,
        songName: `Afsanay<br>
        <div class = "subtitle">Young Stunners</div>`,
        poster: "./Images/18.jpg"
    },
    {
        id: 19,
        songName: `Me & You<br>
        <div class = "subtitle">Young Stunners</div>`,
        poster: "./Images/19.jpg"
    },
    {
        id: 20,
        songName: `Why Not Meri Jaan<br>
        <div class = "subtitle">Young Stunners</div>`,
        poster: "./Images/20.jpg"
    }
]

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

//Search Data Start

let searchBar = document.getElementsByClassName("searchBar")[0];
songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement("a");
    card.classList.add("card");
    card.href = "#" + id;
    card.innerHTML = `<img src="${poster}" alt="">
                            <div class="content">
                            ${songName}
                            <div class="subtitle">Atif Aslam</div>
                            </div>`;
    searchBar.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup", ()=>{
    let input_value = input.value.toUpperCase();
    let items = searchBar.getElementsByTagName("a");

    for (let index = 0; index < items.length; index++) {
        let index1 = items[index].getElementsByClassName("content")[0];
        let text_value = index1.textContent || index.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        }
        else{
            items[index].style.display = "none";
        }
        
        if (input.value == 0) {
            searchBar.style.display = "none";
        } else {
            searchBar.style.display = "";
        }
    }
})

//Search Data End

let master_play = document.getElementById("master_play");
let wave = document.getElementById("wave");

master_play.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add("active1");
        master_play.classList.remove("bi-play-fill");
        master_play.classList.add("bi-pause-fill");
    }
    else {
        music.pause();
        wave.classList.remove("active1");
        master_play.classList.add("bi-play-fill");
        master_play.classList.remove("bi-pause-fill");
    }
});

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
        el.classList.remove("bi-pause-circle-fill")
        el.classList.add("bi-play-circle-fill");

    })
}

const changeAllBackground = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
    e.addEventListener("click", (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `Images/${index}.jpg`
        music.play();
        master_play.classList.remove("bi-play-fill");
        master_play.classList.add("bi-pause-fill");
        download_music.href = `audio/${index}.mp3`
        let songTitle = songs.filter((el) => {
            return el.id == index;
        });

        songTitle.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        changeAllBackground();
        Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = 'rgb(105, 105, 105, .1';
        makeAllPlay();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add("active1");
    })
})

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;

    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`
    dot.style.left = `${seekBar}%`
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill')
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill')
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill')
    }

    let vol_control = vol.value;
    vol_bar.style.width = `${vol_control}%`
    vol_dot.style.left = `${vol_control}%`
    music.volume = vol_control / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `Images/${index}.jpg`
    music.play();
    master_play.classList.remove("bi-play-fill");
    master_play.classList.add("bi-pause-fill");
    let songTitle = songs.filter((el) => {
        return el.id == index;
    });

    songTitle.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    });

    changeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = 'rgb(105, 105, 105, .1';
    makeAllPlay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add("active1");
});

next.addEventListener('click', () => {
    index++;

    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `Images/${index}.jpg`
    music.play();
    master_play.classList.remove("bi-play-fill");
    master_play.classList.add("bi-pause-fill");
    let songTitle = songs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    });

    changeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = 'rgb(105, 105, 105, .1';
    makeAllPlay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add("active1");
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener("click", () => {
    let shuffling = shuffle.innerHTML;

    switch (shuffling) {
        case 'next':
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat";
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random";
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next";
            break;
    }
})

const next_music = () => {
    if (index == songs.length) {
        index = 1;
    }
    else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `Images/${index}.jpg`
    music.play();
    master_play.classList.remove("bi-play-fill");
    master_play.classList.add("bi-pause-fill");
    download_music.href = `audio/${index}.mp3`
    let songTitle = songs.filter((el) => {
        return el.id == index;
    });

    songTitle.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    changeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = 'rgb(105, 105, 105, .1';
    makeAllPlay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add("active1");
}

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `Images/${index}.jpg`
    music.play();
    master_play.classList.remove("bi-play-fill");
    master_play.classList.add("bi-pause-fill");
    download_music.href = `audio/${index}.mp3`
    let songTitle = songs.filter((el) => {
        return el.id == index;
    });

    songTitle.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    changeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = 'rgb(105, 105, 105, .1';
    makeAllPlay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add("active1");
}

const random_music = () => {
    if (index == songs.length) {
        index = 1;
    }
    else {
        index = Math.floor((Math.random() * songs.length) + 1)
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `Images/${index}.jpg`
    music.play();
    master_play.classList.remove("bi-play-fill");
    master_play.classList.add("bi-pause-fill");
    download_music.href = `audio/${index}.mp3`
    let songTitle = songs.filter((el) => {
        return el.id == index;
    });

    songTitle.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    changeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = 'rgb(105, 105, 105, .1';
    makeAllPlay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add("active1");
}

music.addEventListener('ended', () => {
    let shuffling1 = shuffle.innerHTML;
    switch (shuffling1) {
        case 'next':
            next_music();
            break;
        case 'repeat':
            repeat_music();
            break;
        case 'random':
            random_music();
            break;
    }
});

let menu_list_active = document.getElementById("menu_list_active");
let menu_side = document.getElementsByClassName("menu_side")[0];

menu_list_active.addEventListener("click", ()=>{
    menu_side.style.transform = "unset";
    menu_list_active.style.opacity = 0;
})

let song_side = document.getElementsByClassName("song_side")[0];

song_side.addEventListener("click", ()=>{
    menu_side.style.transform = "";
    menu_list_active.style.opacity = 1;
})