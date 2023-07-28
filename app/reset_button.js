window.onload = function() {
    document.querySelector('#stop-video-button').addEventListener('click', function() {
        let video = document.querySelector('video');
        let uploadLabel = document.getElementById('upload-label');
        let subtitleText = document.getElementById('subtitle-text');

        video.pause();
        video.currentTime = 0;
        video.src = '';
        video.style.display = 'none';

        subtitleText.textContent = 'Translation Subtitles Will Appear Here';
        subtitleText.style.opacity = '0';

        uploadLabel.style.display = 'block';
    });
}
