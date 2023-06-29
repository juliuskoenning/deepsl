window.onload = function() {
    document.querySelector('#stop-video-button').addEventListener('click', function() {
        let video = document.querySelector('video');
        let uploadLabel = document.getElementById('upload-label');
        let subtitleText = document.getElementById('subtitle-text');

        // Stop and reset the video
        video.pause();
        video.currentTime = 0;
        video.src = '';
        video.style.display = 'none';

        // Reset the subtitles and make them invisible
        subtitleText.textContent = 'Translation Subtitles Will Appear Here';
        subtitleText.style.opacity = '0';

        // Show the file upload input again
        uploadLabel.style.display = 'block';
    });
}
