
# 🎵 My Music – Responsive Music Cards Web App

**My Music** is a simple and clean music web interface that displays a collection of 16 music cards, each featuring a song with album art, title, artist name, and audio playback controls. This project uses HTML, CSS, and JavaScript, and is suitable for personal music portfolios, learning purposes, or hobby websites.

## 🚀 Features

- Responsive navigation bar
- Interactive music cards with:
  - Album cover
  - Song title & artist name
  - Custom audio player controls
- Organized in flexible containers for clean layout
- Mobile-friendly design with toggle menu
- "Refresh" button to reload the page
- Modular code structure for easy scaling

## 📁 Project Structure

```

MyMusicProject/
├── index.html             # Main HTML file
├── assect/
│   ├── style.css          # CSS file for layout and design
│   └── script.js          # JavaScript for player functionality
├── Music/
│   ├── Beretta Amanraj Gill 128 Kbps.mp3
│   ├── Tagde Karam Sumit Parta 128 Kbps.mp3
│   ├── ... (other audio files)
│   └── image.png          # Optional album image fallback

````

## 🛠 Technologies Used

- **HTML5** – Markup for structure
- **CSS3** – Styling and layout (external stylesheet)
- **JavaScript (Vanilla)** – Audio playback control
- **Responsive Design** – Mobile-friendly layout with a collapsible menu

## 📸 Screenshot

> _[Insert a screenshot of the music cards webpage here if sharing online]_

## 📌 Usage Instructions

1. Clone or download this repository.
2. Place your MP3 music files in the `Music/` folder and ensure filenames match those used in the `<audio src="...">` tags in `index.html`.
3. Update or replace album image links if needed.
4. Open `index.html` in a web browser.
5. Enjoy your music!

## 🔧 How to Add More Songs

Each music card follows this structure:

```html
<div class="card">
  <img src="AlbumCover.jpg" alt="Album Art">
  <div class="card-content">
    <p class="song-title">Song Title</p>
    <p class="artist">Artist Name</p>
    <audio src="Music/YourSong.mp3"></audio>
    <div class="player-controls">
      <button class="play-btn">▶</button>
      <div class="progress-container">
        <div class="progress"></div>
      </div>
      <div class="time">0:00</div>
    </div>
  </div>
</div>
````

Just copy and paste the above inside the `.container` and update the song details.

## 📌 Notes

* Ensure all file paths are correct (`assect/` should contain the actual `style.css` and `script.js`)
* Some image links may expire or fail if hosted on third-party sites. You can download and host images locally if needed.
* JavaScript is required for custom player functions (play, pause, progress bar, etc.)

## 🧑‍💻 Author

**Raman Panchal**
Frontend Developer | India
📧 [ramanpanchal64@gmail.com](mailto:ramanpanchal64@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/raman-panchal-04bb5030b/)
🔗 [GitHub](https://github.com/DevloperRaman)

---

```

 .
```

