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

        // Show the video player and hide the upload label
        video.style.display = "block";
        document.getElementById('upload-label').style.display = 'none';

            // Display the first subtitle
            setTimeout(function() {
                subtitleText.textContent = data.subtitles[0];
                subtitleText.style.opacity = "1";
            }, 3000);

            // Reset opacity to 0 before changing to the second subtitle
            setTimeout(function() {
                subtitleText.style.opacity = "0";
            }, 4000); 

            // Display the second subtitle
            setTimeout(function() {
                subtitleText.textContent = data.subtitles[1];
                subtitleText.style.opacity = "1";
            }, 6500);

            // Reset opacity to 0 before changing to the third subtitle
            setTimeout(function() {
                subtitleText.style.opacity = "0";
            }, 7500); 

            // Display the third subtitle
            setTimeout(function() {
                subtitleText.textContent = data.subtitles[2];
                subtitleText.style.opacity = "1";
            }, 9750);

                        // Reset opacity to 0 before changing to the third subtitle
            setTimeout(function() {
            subtitleText.style.opacity = "0";
            }, 10750); 

            // Hide the upload input after the video has loaded
            video.oncanplay = function() {
                document.getElementById('upload-label').style.display = 'none';
            };
        })
        .catch(error => console.error(error));
    }