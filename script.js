"use strict";

/*
  STRUKTUR FOLDER:
  musik/lagu1.mp3
  cover/cover1.PNG

  Sesuaikan nama file jika berbeda.
*/

const playlists = {
  jawa: [
    ["DJ All In For You", "https://drive.google.com/file/d/1_a8ILDswo6YeIa8DqcidIpdT3dJ5OrzD/preview"", "cover1.PNG"],
    ["DJ Tulus", "lagu2.mp3", "cover2.PNG"],
    ["DJ Sigar", "lagu3.mp3", "cover3.PNG"],
    ["DJ Denok", "lagu4.mp3", "cover4.PNG"],
    ["DJ Tresno Liyane", "lagu5.mp3", "cover5.PNG"],
    ["DJ Wirang", "lagu6.mp3", "cover3.PNG"],
    ["DJ Raiso Ngapusi", "lagu7.mp3", "cover3.jpg"],
    ["DJ Maafkan Kesalahanku", "lagu8.mp3", "cover3.jpg"],
    ["DJ Mencintaimu Dengan Ngeyel", "lagu9.mp3", "cover3.jpg"],
    ["DJ Manungso Ora Toto", "lagu10.mp3", "cover3.jpg"],
    ["DJ Saktenane", "lagu11.mp3", "cover3.jpg"],
    ["DJ Banyu Moto", "lagu12.mp3", "cover3.jpg"],
    ["DJ Mix TulusxSamarxRasah Bali", "lagu13.mp3", "cover3.jpg"],
    ["DJ Wes Suwe Aku Ngenteni Kowe", "lagu14.mp3", "cover3.jpg"],
    ["DJ Nresnani", "lagu15.mp3", "cover3.jpg"],
    ["DJ Ikhlas", "lagu16.mp3", "cover3.jpg"],
    ["DJ Los Dol", "lagu17.mp3", "cover3.jpg"],
  ],

  barat: [
    ["Alan Walker Remix", "barat1.mp3", "coverbarat1.jpg"],
    ["DJ Night Drive", "barat2.mp3", "coverbarat2.jpg"],
  ],

  dj: [
    ["DJ Malu-Malu TikTok Remix", "viral1.mp3", "coverviral1.jpg"],
    ["DJ Kaka so Manis Slow Bass Viral", "viral2.mp3", "coverviral2.jpg"],
    ["DJ Slow Tabola-Bale Bass Viral", "viral3.mp3", "coverviral2.jpg"],
    ["DJ Engga Dulu", "viral4.mp3", "coverviral2.jpg"],
    ["DJ So Asu x Dora-dora", "viral5.mp3", "coverviral2.jpg"],
    ["DJ Body Patapata", "viral6.mp3", "coverviral6.PNG"],
    ["DJ EEEA Engkol", "viral7.mp3", "coverviral2.jpg"],
    ["DJ Kasih Aba-Aba X Mejikuhibiniu", "viral8.mp3", "coverviral2.jpg"],
    ["DJ Bintang 5", "viral9.mp3", "coverviral2.jpg"],
    ["DJ CLBK", "viral10.mp3", "coverviral2.jpg"],
    ["DJ Kasih Tau Mama", "viral11.mp3", "coverviral11.jpg"],
    ["DJ Aishiteru 2", "viral12.mp3", "coverviral12.jpg"],
  ],
};

const categoryNames = {
  jawa: "Lagu Jawa",
  barat: "Lagu Barat",
  dj: "Lagu DJ",
};

const audio = document.getElementById("audio");
const playlistEl = document.getElementById("playlist");
const searchInput = document.getElementById("searchInput");
const seekBar = document.getElementById("seekBar");
const volumeBar = document.getElementById("volumeBar");
const playBtn = document.getElementById("playBtn");
const notice = document.getElementById("notice");

const coverImg = document.getElementById("coverImg");
const miniCover = document.getElementById("miniCover");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const miniTitle = document.getElementById("miniTitle");
const miniArtist = document.getElementById("miniArtist");
const songCategory = document.getElementById("songCategory");
const playingStatus = document.getElementById("playingStatus");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const playlistTitle = document.getElementById("playlistTitle");
const songCount = document.getElementById("songCount");
const emptyMessage = document.getElementById("emptyMessage");

let category = "jawa";
let currentIndex = 0;
let currentSong = null;
let shuffle = false;
let repeat = false;
let noticeTimer;
let loadVersion = 0;

audio.volume = Number(volumeBar.value);

function getSongs() {
  return playlists[category].map(([title, file, cover]) => ({
    title,
    file,
    cover,
    category,
  }));
}

function getAudioPath(song) {
  return "musik/" + song.file;
}

function getCoverPath(song) {
  return "cover/" + song.cover;
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function showNotice(message) {
  notice.textContent = message;
  notice.classList.add("show");

  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => {
    notice.classList.remove("show");
  }, 2600);
}

/* Gambar cadangan jika file sampul tidak ditemukan. */
function fallbackCover(title) {
  const initials = (title || "MM").slice(0, 2).toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#101820"/>
          <stop offset="1" stop-color="#07566b"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" rx="24" fill="url(#g)"/>
      <circle cx="200" cy="200" r="115"
        fill="none" stroke="#00d4ff" stroke-width="3" opacity=".6"/>
      <text x="200" y="225" text-anchor="middle"
        fill="#00d4ff" font-size="90" font-weight="bold"
        font-family="Arial">${initials}</text>
    </svg>`;

  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function setImage(img, song) {
  img.onerror = () => {
    img.onerror = null;
    img.src = fallbackCover(song.title);
  };

  img.src = getCoverPath(song);
}

/* TAMPILKAN DAFTAR LAGU */
function renderPlaylist() {
  const songs = getSongs();
  const query = searchInput.value.trim().toLowerCase();

  playlistEl.replaceChildren();

  const filtered = songs
    .map((song, index) => ({ song, index }))
    .filter(({ song }) => song.title.toLowerCase().includes(query));

  songCount.textContent = `${filtered.length} lagu`;
  emptyMessage.hidden = filtered.length > 0;

  filtered.forEach(({ song, index }) => {
    const li = document.createElement("li");
    li.className = "song-row";
    li.tabIndex = 0;
    li.setAttribute("role", "button");

    const number = document.createElement("span");
    number.className = "row-number";
    number.textContent =
      currentSong === song ? (audio.paused ? "Ⅱ" : "♫") : index + 1;

    const info = document.createElement("div");
    info.className = "row-info";

    const img = document.createElement("img");
    img.className = "row-cover";
    img.alt = "";
    img.loading = "lazy";
    setImage(img, song);

    const text = document.createElement("div");
    text.className = "row-text";

    const name = document.createElement("span");
    name.className = "row-title";
    name.textContent = song.title;

    const artist = document.createElement("span");
    artist.className = "row-artist";
    artist.textContent = categoryNames[category];

    text.append(name, artist);
    info.append(img, text);

    const duration = document.createElement("span");
    duration.className = "row-duration";
    duration.textContent = "--:--";

    getSongDuration(song).then((time) => {
      duration.textContent = time;
    });

    if (currentSong === song) li.classList.add("active");

    li.append(number, info, duration);

    const selectSong = () => {
      if (currentSong === song) {
        togglePlay();
      } else {
        playSong(index);
      }
    };

    li.addEventListener("click", selectSong);
    li.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectSong();
      }
    });

    playlistEl.appendChild(li);
  });
}

/* MUAT LAGU */
async function playSong(index, autoplay = true) {
  const songs = getSongs();
  if (!songs.length) return;

  currentIndex = (index + songs.length) % songs.length;
  currentSong = songs[currentIndex];

  const version = ++loadVersion;

  audio.pause();
  audio.src = getAudioPath(currentSong);
  audio.load();

  songTitle.textContent = currentSong.title;
  miniTitle.textContent = currentSong.title;
  songArtist.textContent = categoryNames[category];
  miniArtist.textContent = categoryNames[category];
  songCategory.textContent = categoryNames[category];
  playingStatus.textContent = "Memuat lagu...";

  coverImg.classList.add("changing");
  setImage(coverImg, currentSong);
  setImage(miniCover, currentSong);

  coverImg.onload = () => coverImg.classList.remove("changing");

  seekBar.value = 0;
  currentTimeEl.textContent = "0:00";
  durationEl.textContent = "0:00";

  renderPlaylist();

  if (autoplay) {
    try {
      await audio.play();

      if (version !== loadVersion) return;

      updatePlayButton();
      playingStatus.textContent = "Sedang diputar";
    } catch (error) {
      if (version !== loadVersion) return;

      updatePlayButton();
      playingStatus.textContent = "Belum dapat diputar";
      showNotice("Periksa file musik: " + currentSong.file);
    }
  } else {
    updatePlayButton();
    playingStatus.textContent = "Siap diputar";
  }
}

/* PLAY / PAUSE */
async function togglePlay() {
  if (!currentSong) {
    await playSong(currentIndex);
    return;
  }

  if (audio.paused) {
    try {
      await audio.play();
    } catch {
      showNotice("File tidak ditemukan atau tidak bisa diputar.");
    }
  } else {
    audio.pause();
  }

  updatePlayButton();
}

function updatePlayButton() {
  const isPlaying = !audio.paused;

  playBtn.textContent = isPlaying ? "Ⅱ" : "▶";
  playBtn.title = isPlaying ? "Jeda" : "Putar";
  playBtn.setAttribute("aria-label", isPlaying ? "Jeda lagu" : "Putar lagu");

  playingStatus.textContent = isPlaying ? "Sedang diputar" : "Dijeda";

  renderPlaylist();
}

/* LAGU BERIKUTNYA / SEBELUMNYA */
function nextSong() {
  const songs = getSongs();
  if (!songs.length) return;

  let nextIndex;

  if (shuffle && songs.length > 1) {
    do {
      nextIndex = Math.floor(Math.random() * songs.length);
    } while (nextIndex === currentIndex);
  } else {
    nextIndex = (currentIndex + 1) % songs.length;
  }

  playSong(nextIndex);
}

function prevSong() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  const songs = getSongs();
  if (!songs.length) return;

  playSong((currentIndex - 1 + songs.length) % songs.length);
}

playBtn.addEventListener("click", togglePlay);
document.getElementById("nextBtn").addEventListener("click", nextSong);
document.getElementById("prevBtn").addEventListener("click", prevSong);

/* SHUFFLE */
const shuffleBtn = document.getElementById("shuffleBtn");

shuffleBtn.addEventListener("click", () => {
  shuffle = !shuffle;
  shuffleBtn.classList.toggle("enabled", shuffle);
  shuffleBtn.setAttribute("aria-pressed", String(shuffle));
  showNotice(shuffle ? "Acak lagu aktif" : "Acak lagu nonaktif");
});

/* REPEAT */
const repeatBtn = document.getElementById("repeatBtn");

repeatBtn.addEventListener("click", () => {
  repeat = !repeat;
  repeatBtn.classList.toggle("enabled", repeat);
  repeatBtn.setAttribute("aria-pressed", String(repeat));
  showNotice(repeat ? "Pengulangan aktif" : "Pengulangan nonaktif");
});

audio.addEventListener("ended", () => {
  if (repeat) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } else {
    nextSong();
  }
});

audio.addEventListener("play", updatePlayButton);
audio.addEventListener("pause", updatePlayButton);

/* PROGRESS DAN DURASI */
audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);

  seekBar.value = 0;
  renderPlaylist();
});

audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audio.currentTime);

  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    seekBar.value = Math.round((audio.currentTime / audio.duration) * 1000);
  }
});

seekBar.addEventListener("input", () => {
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    audio.currentTime = (Number(seekBar.value) / 1000) * audio.duration;
  }
});

/* VOLUME */
volumeBar.addEventListener("input", () => {
  audio.volume = Number(volumeBar.value);
  audio.muted = audio.volume === 0;
});

/* KATEGORI */
document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    category = button.dataset.category;
    currentIndex = 0;

    document.querySelectorAll(".tab").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });

    playlistTitle.textContent = categoryNames[category];
    searchInput.value = "";

    renderPlaylist();
    playSong(0, false);
  });
});

/* PENCARIAN */
searchInput.addEventListener("input", renderPlaylist);

/* TANGANI FILE AUDIO YANG GAGAL */
audio.addEventListener("error", () => {
  if (!currentSong) return;

  playingStatus.textContent = "File audio tidak tersedia";
  showNotice("Tidak dapat membuka " + currentSong.file);
});

/* INISIALISASI */
playlistTitle.textContent = categoryNames[category];
renderPlaylist();
playSong(0, false);

function getSongDuration(song) {
  return new Promise((resolve) => {
    const audioInfo = new Audio();

    audioInfo.preload = "metadata";

    audioInfo.onloadedmetadata = () => {
      const minutes = Math.floor(audioInfo.duration / 60);
      const seconds = Math.floor(audioInfo.duration % 60);

      resolve(minutes + ":" + String(seconds).padStart(2, "0"));

      audioInfo.src = "";
    };

    audioInfo.onerror = () => {
      resolve("--:--");
    };

    audioInfo.src = "musik/" + song.file;
  });
}
