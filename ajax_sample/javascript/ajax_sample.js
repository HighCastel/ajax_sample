let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'javascript/ajax.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            data = JSON.parse(xhr.responseText);
            cambiarVideo();
        }
    };
    xhr.send();
}

function cambiarVideo() {
    if (data.length === 0) {
        getData();
    } else {
        const videoData = data[number];
        titleArea.textContent = videoData.title;
        videoArea.src = videoData.url;
        contentArea.textContent = title.videoData;
        number = (number + 1) % data.length;
    }
}

button.addEventListener('click', cambiarVideo);

window.onload = cambiarVideo;
