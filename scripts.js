// Check if the animation has already been played
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    const animationPlayed = localStorage.getItem('animationPlayed');

    if (!animationPlayed) {
        // Add the animation class to play the GIF mask
        banner.classList.add('animate');
        // Mark the animation as played in localStorage
        localStorage.setItem('animationPlayed', 'true');
    }
});

// Function to redo the animation
function redoAnimation() {
    // Clear localStorage to allow the animation to replay
    localStorage.removeItem('animationPlayed');

    // Reload the page to trigger the animation
    location.reload();
}
