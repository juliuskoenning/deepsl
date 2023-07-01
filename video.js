function handleVideoUpload(event) {
    let videoFile = event.target.files[0];
    let formData = new FormData();

    let subtitleText = document.getElementById('subtitle-text');
    subtitleText.style.opacity = "0";

    formData.append('video', videoFile);
    fetch('http://localhost:8000/api/videos', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        let videoUrl = URL.createObjectURL(videoFile);
        let video = document.querySelector('video');
        video.src = videoUrl;
        video.load();
        video.play();
        video.style.display = "block";
        document.getElementById('upload-label').style.display = 'none';

        setTimeout(function() {
            subtitleText.textContent = data.subtitle;
            subtitleText.style.opacity = "1";
        }, 0);

        setTimeout(function() {
            subtitleText.style.opacity = "0";
        }, 1000); 

        video.oncanplay = function() {
            document.getElementById('upload-label').style.display = 'none';
        };
    })
    .catch(error => console.error(error));
}
