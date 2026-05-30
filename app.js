let playing = false;

function togglePlay() {
  playing = !playing;
  document.querySelectorAll('#playBtn, .play-big-btn').forEach(btn => {
    const svg = btn.querySelector('svg');
    svg.innerHTML = playing
      ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
      : '<path d="M8 5v14l11-7z"/>';
  });
}

function goToArtist() { window.location.href = 'artist.html'; }

function toggleFollow(btn) {
  btn.classList.toggle('following');
  btn.textContent = btn.classList.contains('following') ? 'FOLLOWING' : 'FOLLOW';
}

document.querySelectorAll('.progress-bar').forEach(bar => {
  bar.addEventListener('click', e => {
    bar.querySelector('.progress-fill').style.width = (e.offsetX / bar.offsetWidth * 100) + '%';
  });
});

document.querySelectorAll('.volume-bar').forEach(bar => {
  bar.addEventListener('click', e => {
    bar.querySelector('.volume-fill').style.width = (e.offsetX / bar.offsetWidth * 100) + '%';
  });
});