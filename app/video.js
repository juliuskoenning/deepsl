function handleVideoUpload(event) {
  let videoFile = event.target.files[0];
  let formData = new FormData();

  let subtitleText = document.getElementById('subtitle-text');
  subtitleText.style.opacity = '0';

  formData.append('video', videoFile);

  document.getElementById('loader').style.display = 'block';
  document.getElementById('upload-label').style.display = 'none';

  fetch('http://localhost:8000/api/videos', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let videoUrl = URL.createObjectURL(videoFile);
      let video = document.querySelector('video');
      video.src = videoUrl;
      video.load();
      video.play();
      video.style.display = 'block';

      data.subtitle.forEach((item) => {
        setTimeout(function () {
          subtitleText.textContent = item.label;
          subtitleText.style.opacity = '1';
        }, item.start_time * 1000);

        setTimeout(function () {
          subtitleText.style.opacity = '0';
        }, item.end_time * 1000);
      });

      video.oncanplay = function () {
        document.getElementById('loader').style.display = 'none';
      };
    })
    .catch((error) => {
      console.error(error);

      document.getElementById('loader').style.display = 'none';
      document.getElementById('upload-label').style.display = 'block';
    });
}
