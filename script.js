"use strict";

/*
  STRUKTUR FOLDER:
  musik/lagu1.mp3
  cover/cover1.PNG

  Sesuaikan nama file jika berbeda.
*/

const playlists = {
  jawa: [
    ["DJ All In For You", "lagu1.mp3", "cover1.PNG"],
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
    ["DJ Negoro Angin", "lagu18.mp3", "cover3.jpg"],
    ["DJ Sinarengan Jono Joni", "lagu19.mp3", "cover3.jpg"],
    ["DJ Anak Lanang", "lagu20.mp3", "cover3.jpg"],
  ],

  barat: [
    ["Photograph", "barat1.mp3", "coverbarat1.jpg"],
    ["Night Changes", "barat2.mp3", "coverbarat2.jpg"],
    ["About You", "barat3.mp3", "coverbarat2.jpg"],
    ["Treat You Better", "barat4.mp3", "coverbarat2.jpg"],
    ["Love Story", "barat5.mp3", "coverbarat2.jpg"],
    ["At My Worst", "barat6.mp3", "coverbarat2.jpg"],
    ["Birds of Feather", "barat7.mp3", "coverbarat2.jpg"],
    ["Love Yourself", "barat8.mp3", "coverbarat2.jpg"],
    ["We Cant be Friend", "barat9.mp3", "coverbarat2.jpg"],
    ["Imagination", "barat10.mp3", "coverbarat2.jpg"],
    ["Good Life", "barat11.mp3", "coverbarat2.jpg"],
    ["Just Friend To You", "barat12.mp3", "coverbarat2.jpg"],
    ["Ghost", "barat13.mp3", "coverbarat2.jpg"],
    ["Supernatural", "barat14.mp3", "coverbarat2.jpg"],
    ["Attention", "barat15.mp3", "coverbarat2.jpg"],
    ["Youll be My Heart", "barat16.mp3", "coverbarat2.jpg"],
    ["Espresso", "barat17.mp3", "coverbarat2.jpg"],
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
    ["DJ Karna Ada Ko", "viral13.mp3", "coverviral.jpg"],
    ["DJ Astaga Bercanda", "viral14.mp3", "cover3.jpg"],
    ["DJ Tanteholic", "viral15.mp3", "cover3.jpg"],
    ["DJ Tapamu Tapaku", "viral16.mp3", "cover3.jpg"],
    ["DJ Preman Feminim", "viral17.mp3", "cover3.jpg"],
  ],
  pop: [
    ["Kita Lewati Berdua - Overnight", "pop1.mp3", "coverviral1.jpg"],
    [
      "For Revenge X Stereo Wall - Jakarta Hari Ini",
      "pop2.mp3",
      "coverviral1.jpg",
    ],
    ["Lacy Band - Selingkuh", "pop3.mp3", "coverviral1.jpg"],
    ["Dudy Oris - Aku Yang Jatuh Cinta", "pop4.mp3", "coverviral1.jpg"],
    ["Nadhif Basalamah - penjaga hati", "pop5.mp3", "coverviral1.jpg"],
    ["Khifnu - Merindumu lagi", "pop6.mp3", "coverviral1.jpg"],
    ["1000x - Ghea Indrawari", "pop7.mp3", "coverviral1.jpg"],
    [
      "Arsy Widianto, Brisia Jodie - Dengan Caraku",
      "pop8.mp3",
      "coverviral1.jpg",
    ],
    ["Last Child - Sekuat Hatimu", "pop9.mp3", "coverviral1.jpg"],
    ["Hindia - everything u are", "pop10.mp3", "coverviral1.jpg"],
    [
      "Yura Yunita ft. Glenn Fredly - Cinta dan Rahasia",
      "pop11.mp3",
      "coverviral1.jpg",
    ],
    ["Hindia - Secukupnya", "pop12.mp3", "coverviral1.jpg"],
    ["Raim Laode - Lesung Pipi", "pop13.mp3", "coverviral1.jpg"],
    ["ST12 - Putri Iklan", "pop14.mp3", "coverviral1.jpg"],
    ["Papinka - Masih Mencintainya", "pop15.mp3", "coverviral1.jpg"],
    ["Nidji - Rahasia Hati", "pop16.mp3", "coverviral1.jpg"],
    ["Feast - Nina", "pop17.mp3", "coverviral1.jpg"],
    ["Dash uchiha - Merindukanmu", "pop18.mp3", "coverviral1.jpg"],
    [
      "Nadhif Basalamah - Bergema sampai selamanya",
      "pop19.mp3",
      "coverviral1.jpg",
    ],
    ["Pergi Hilang Dan Lupakan", "pop20.mp3", "coverviral1.jpg"],
    ["ST12 - P.U.S.P.A", "pop21.mp3", "coverviral1.jpg"],
    ["The Lantis - Bunga Maaf", "pop22.mp3", "coverviral1.jpg"],
    ["Dimana Hatimu - Papinka", "pop23.mp3", "coverviral1.jpg"],
    ["Terbang Bersamaku - Kangen Band", "pop24.mp3", "coverviral1.jpg"],
    ["Kangen Band - Cinta Sampai Mati", "pop25.mp3", "coverviral1.jpg"],
    ["Waktu Yang Salah - Fiersa Besari", "pop26.mp3", "coverviral1.jpg"],
    ["Selamat Tinggal - Virgoun", "pop27.mp3", "coverviral1.jpg"],
    ["Virgoun - Surat Cinta Untuk Starla", "pop28.mp3", "coverviral1.jpg"],
    ["Last Child - Duka", "pop29.mp3", "coverviral1.jpg"],
    ["Diary Depresiku - Last Child", "pop30.mp3", "coverviral1.jpg"],
    ["Mungkin Nanti - Peterpan", "pop31.mp3", "coverviral1.jpg"],
  ],
  break: [
    ["BREAKBEAT BAILAR _ BLACK HOLE ", "break1.mp3", "coverbarat1.jpg"],
    ["Always Loving You X An Angel's Love", "break2.mp3", "coverbarat2.jpg"],
    ["MIRACLES BREAKBEAT", "break3.mp3", "coverbarat2.jpg"],
    ["AFTERSHOCK STADIUM BREAKBEAT", "break4.mp3", "coverbarat2.jpg"],
    ["MIXTAPE STADIUM BREAKBEAT", "break5.mp3", "coverbarat2.jpg"],
    ["THE FATE OF OPHELIA STADIUM BREAKBEAT", "break6.mp3", "coverbarat2.jpg"],
  ],
};

const categoryNames = {
  jawa: "Lagu DJ Jawa",
  barat: "Lagu Barat",
  dj: "Lagu DJ Viral",
  pop: "Lagu Pop",
  break: "Lagu Breakbeat",
};

// TAMBAHKAN DATA DETAIL LAGU DI SINI
const songDetails = {
  "Kita Lewati Berdua - Overnight": {
    artist: "Overnight",
    year: "",
    bio: "Tambahkan deskripsi lagu berdasarkan informasi yang sudah kamu verifikasi.",
  },

  "For Revenge X Stereo Wall - Jakarta Hari Ini": {
    artist: "For Revenge, Stereo Wall",
    year: "",
    bio: "Tambahkan cerita atau deskripsi lagu yang sesuai.",
  },
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
  const songs = [...playlists[category]];

  try {
    const savedOrder = JSON.parse(
      localStorage.getItem("mymusic-order-" + category) || "[]",
    );

    songs.sort((a, b) => {
      const indexA = savedOrder.indexOf(a[1]);
      const indexB = savedOrder.indexOf(b[1]);

      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    });
  } catch (error) {
    console.warn("Urutan playlist tidak dapat dibaca.", error);
  }

  return songs.map(([title, file, cover]) => {
    const details = songDetails[title] || {};
    return {
      title,
      file,
      cover,
      category,
      artist: details.artist || "Artis belum diisi",
      year: details.year || "",
      bio: details.bio || "Belum ada deskripsi lagu.",
    };
  });
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
    li.draggable = true;
    li.style.cursor = "grab";

    li.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", String(index));
      event.dataTransfer.effectAllowed = "move";

      li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
      document.querySelectorAll(".song-row").forEach((row) => {
        row.classList.remove("dragging", "drag-over");
      });
    });

    li.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";

      document.querySelectorAll(".song-row").forEach((row) => {
        row.classList.remove("drag-over");
      });

      if (!li.classList.contains("dragging")) {
        li.classList.add("drag-over");
      }
    });

    li.addEventListener("dragleave", (event) => {
      if (!li.contains(event.relatedTarget)) {
        li.classList.remove("drag-over");
      }
    });

    li.addEventListener("drop", (event) => {
      event.preventDefault();

      const fromIndex = Number(event.dataTransfer.getData("text/plain"));
      const toIndex = index;

      const songs = playlists[category];

      if (
        !Number.isInteger(fromIndex) ||
        fromIndex < 0 ||
        fromIndex >= songs.length ||
        fromIndex === toIndex
      ) {
        return;
      }

      const [movedSong] = songs.splice(fromIndex, 1);
      songs.splice(toIndex, 0, movedSong);

      try {
        localStorage.setItem(
          "mymusic-order-" + category,
          JSON.stringify(songs.map((song) => song[1])),
        );
      } catch (error) {
        showNotice("Urutan tidak dapat disimpan.");
      }

      renderPlaylist();
    });

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

  playBtn.innerHTML = isPlaying
    ? `<svg viewBox="0 0 24 24" aria-hidden="true">
         <rect x="6" y="4" width="4" height="16" rx="1"/>
         <rect x="14" y="4" width="4" height="16" rx="1"/>
       </svg>`
    : `<svg viewBox="0 0 24 24" aria-hidden="true">
         <path d="M8 4.5v15l12-7.5z"/>
       </svg>`;

  playBtn.classList.toggle("is-playing", isPlaying);
  playBtn.title = isPlaying ? "Pause" : "Play";
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

/* KATEGORI — MUSIK TETAP BERJALAN */

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    const newCategory = button.dataset.category;

    if (newCategory === category) return;

    category = newCategory;
    currentIndex = 0;

    document.querySelectorAll(".tab").forEach((tab) => {
      const active = tab.dataset.category === category;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });

    playlistTitle.textContent = categoryNames[category];
    searchInput.value = "";

    renderPlaylist();
    updatePlayButton();
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

/* Tambahkan di bagian paling bawah script.js */

const tickerTrack = document.querySelector(".ticker-track");
const tickerText = document.getElementById("tickerText");

// Tiga pesan khusus untuk setiap lagu.
// Nama lagu harus sama persis dengan judul di playlist.
const songMessages = {
  "DJ All In For You": [
    "Awal: Semoga hari ini membawa kebahagiaan untukmu ♡",
    "Tengah: Nikmati setiap nada dan simpan kenangan indah ✨",
    "Akhir: Terima kasih sudah mendengarkan, tetap bahagia 💙",
  ],

  "DJ Tulus": [
    "Awal: Ada cerita yang tersimpan di setiap nada ♡",
    "Tengah: Kadang diam menyimpan begitu banyak rasa ✨",
    "Akhir: Semoga hatimu menemukan ketenangan 💙",
  ],

  "DJ Sigar": [
    "Awal: Setiap pertemuan punya cerita tersendiri ♡",
    "Tengah: Belajar ikhlas memang butuh waktu ✨",
    "Akhir: Semoga luka perlahan berubah menjadi bahagia 💙",
  ],

  "DJ Los Dol": [
    "Awal: Jalani hari ini dengan senyuman ♡",
    "Tengah: Nikmati proses, jangan menyerah ✨",
    "Akhir: Terus semangat untuk hari esok 💙",
  ],
};

const defaultMessages = [
  "Selamat menikmati musik favoritmu ♡",
  "Biarkan musik menemani setiap suasana ✨",
  "Terima kasih sudah mendengarkan MyMusic 💙",
];

let tickerStage = -1;
let tickerSongTitle = "";

function setTickerMessage(message) {
  if (!tickerTrack || !tickerText) return;

  tickerText.textContent = message.replace(/^(Awal|Tengah|Akhir):\s*/i, "");

  // Jangan paksa browser menghitung ulang layout
  // dengan membaca offsetWidth setiap kali teks berubah.
  tickerTrack.style.animation = "";
}

function getCurrentSongTitle() {
  return currentSong?.title || "";
}

function resetSongMessages() {
  tickerSongTitle = getCurrentSongTitle();
  tickerStage = 0;

  const messages = songMessages[tickerSongTitle] || defaultMessages;

  setTickerMessage(messages[0]);
}

function updateSongMessages() {
  if (!audio || !Number.isFinite(audio.duration)) return;
  if (audio.duration <= 0) return;

  const title = getCurrentSongTitle();

  // Reset ketika judul lagu berubah.
  if (title !== tickerSongTitle) {
    resetSongMessages();
  }

  const progress = audio.currentTime / audio.duration;
  const remaining = audio.duration - audio.currentTime;

  let newStage = 0;

  if (remaining <= 15) {
    newStage = 2;
  } else if (progress >= 0.5) {
    newStage = 1;
  }

  if (newStage === tickerStage) return;

  tickerStage = newStage;

  const messages = songMessages[title] || defaultMessages;

  setTickerMessage(messages[newStage]);
}

// Pesan awal ketika lagu mulai diputar.
audio.addEventListener("play", () => {
  if (getCurrentSongTitle() !== tickerSongTitle) {
    resetSongMessages();
  }
});

// Periksa posisi audio untuk pergantian pesan.
audio.addEventListener("timeupdate", updateSongMessages);

// Siapkan pesan ketika lagu baru selesai dimuat.
audio.addEventListener("loadedmetadata", resetSongMessages);

// Tampilkan pesan awal saat halaman dibuka.
resetSongMessages();

// ===== PENCARIAN SEMUA KATEGORI =====

const searchSuggestions = document.createElement("div");
searchSuggestions.className = "search-suggestions";
searchSuggestions.setAttribute("role", "listbox");

const searchParent = searchInput.parentElement;
searchParent.style.position = "relative";
searchParent.appendChild(searchSuggestions);

function renderSearchSuggestions() {
  const query = searchInput.value.trim().toLowerCase();

  searchSuggestions.replaceChildren();

  if (!query) {
    searchSuggestions.classList.remove("show");
    return;
  }

  const matches = [];

  // Cari lagu dari seluruh kategori.
  Object.keys(playlists).forEach((cat) => {
    const savedOrder = (() => {
      try {
        return JSON.parse(localStorage.getItem("mymusic-order-" + cat) || "[]");
      } catch {
        return [];
      }
    })();

    const songs = [...playlists[cat]];

    songs.sort((a, b) => {
      const ia = savedOrder.indexOf(a[1]);
      const ib = savedOrder.indexOf(b[1]);

      if (ia === -1 && ib === -1) return 0;
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });

    songs.forEach((song, index) => {
      if (song[0].toLowerCase().includes(query)) {
        matches.push({
          title: song[0],
          file: song[1],
          cover: song[2],
          category: cat,
          index,
        });
      }
    });
  });

  if (matches.length === 0) {
    const empty = document.createElement("div");
    empty.className = "search-suggestion-empty";
    empty.textContent = "Lagu tidak ditemukan.";
    searchSuggestions.appendChild(empty);
    searchSuggestions.classList.add("show");
    return;
  }

  matches.slice(0, 12).forEach((song) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-suggestion";
    button.setAttribute("role", "option");

    const img = document.createElement("img");
    img.alt = "";
    setImage(img, song);

    const info = document.createElement("span");
    info.className = "search-suggestion-info";

    const title = document.createElement("span");
    title.className = "search-suggestion-title";
    title.textContent = song.title;

    const cat = document.createElement("span");
    cat.className = "search-suggestion-category";
    cat.textContent = categoryNames[song.category];

    info.append(title, cat);
    button.append(img, info);

    button.addEventListener("click", () => {
      category = song.category;

      document.querySelectorAll(".tab").forEach((tab) => {
        const active = tab.dataset.category === category;
        tab.classList.toggle("active", active);
        tab.setAttribute("aria-pressed", String(active));
      });

      playlistTitle.textContent = categoryNames[category];

      // Pilih indeks berdasarkan urutan lagu yang tersimpan.
      currentIndex = song.index;

      searchSuggestions.classList.remove("show");
      searchInput.value = "";

      renderPlaylist();
      playSong(currentIndex, true);
    });

    searchSuggestions.appendChild(button);
  });

  searchSuggestions.classList.add("show");
}

searchInput.addEventListener("input", renderSearchSuggestions);

document.addEventListener("click", (event) => {
  if (!searchParent.contains(event.target)) {
    searchSuggestions.classList.remove("show");
  }
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchSuggestions.classList.remove("show");
  }
});

// ===== SPLASH SCREEN MYMUSIC =====

(() => {
  const splash = document.getElementById("splashScreen");

  if (!splash) return;

  // Beri waktu agar logo tampil, lalu buka halaman utama.
  window.setTimeout(() => {
    splash.classList.add("hide");
  }, 2200);

  // Bersihkan elemen setelah transisi selesai.
  window.setTimeout(() => {
    splash.remove();
  }, 3000);
})();
/* ZWARA MUSIC — BACKGROUND MEDIA CONTROLS */
function updateMediaSession() {
  if (!("mediaSession" in navigator)) return;
  if (!currentSong) return;
  const artworkUrl = currentSong.cover
    ? new URL(currentSong.cover, document.baseURI).href
    : new URL("cover/cover1.PNG", document.baseURI).href;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentSong.title || "Zwara Music",
      artist: categoryNames[category] || "Zwara Music",
      album: "Zwara Music",
      artwork: [
        {
          src: artworkUrl,
          sizes: "512x512",
          type: "image/png",
        },
      ],
    });
  } catch (error) {
    console.warn("Metadata media tidak dapat diperbarui:", error);
  }
}
function setupMediaSession() {
  if (!("mediaSession" in navigator)) return;
  const actions = {
    play: () => {
      if (audio.paused) {
        audio.play().catch(() => {
          showNotice("Tekan tombol putar di Zwara Music.");
        });
      }
    },
    pause: () => {
      audio.pause();
    },
    nexttrack: () => {
      nextSong();
    },
    previoustrack: () => {
      prevSong();
    },
    seekbackward: (details) => {
      const offset = details.seekOffset || 10;
      audio.currentTime = Math.max(0, audio.currentTime - offset);
    },
    seekforward: (details) => {
      const offset = details.seekOffset || 10;
      const end = Number.isFinite(audio.duration)
        ? audio.duration
        : audio.currentTime + offset;
      audio.currentTime = Math.min(end, audio.currentTime + offset);
    },
    seekto: (details) => {
      if (
        Number.isFinite(audio.duration) &&
        Number.isFinite(details.seekTime)
      ) {
        audio.currentTime = Math.max(
          0,
          Math.min(audio.duration, details.seekTime),
        );
      }
    },
  };
  for (const [action, handler] of Object.entries(actions)) {
    try {
      navigator.mediaSession.setActionHandler(action, handler);
    } catch {
      // Abaikan kontrol yang tidak didukung browser.
    }
  }
  audio.addEventListener("play", () => {
    updateMediaSession();
    try {
      navigator.mediaSession.playbackState = "playing";
    } catch {}
  });
  audio.addEventListener("pause", () => {
    try {
      navigator.mediaSession.playbackState = "paused";
    } catch {}
  });
  audio.addEventListener("ended", () => {
    try {
      navigator.mediaSession.playbackState = "paused";
    } catch {}
  });
  audio.addEventListener("loadedmetadata", updateMediaSession);
  updateMediaSession();
}
setupMediaSession();
