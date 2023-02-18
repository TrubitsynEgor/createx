const videoBlock = document.querySelector('.video-block');
const video = videoBlock.querySelector('video');
const playBtn = videoBlock.querySelector('.video-block__play ');
const muteBtn = videoBlock.querySelector('.video-block__mute');

playBtn.addEventListener('click', () => {
  videoBlock.classList.add('video-block--played');
  video.play();
  video.controls = true;
  playBtn.classList.add('video-block__play--played');
})
video.onpause = function () {
  videoBlock.classList.remove('video-block--played');
  video.controls = false;
  playBtn.classList.remove('video-block__play--played');
}