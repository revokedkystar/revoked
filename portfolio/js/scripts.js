document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bg-video");

    // Ensure video is muted for autoplay to work
    video.muted = true; // Mute for autoplay on most browsers
    video.play(); // Start playing the video once loaded
});
