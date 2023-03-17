const videoEl = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        }
    } catch (error) {
        // catch Error Here
        console.log('error on line 10', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled  = true;
    // Start Picture in picture
    await videoEl.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();