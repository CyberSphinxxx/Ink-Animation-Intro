function redoAnimation() {
    const banner = document.querySelector('.banner::before');
    banner.style.maskImage = 'url(ink_lv2.gif)';
    setTimeout(() => {
        banner.style.maskImage = 'none';
        setTimeout(() => {
            banner.style.maskImage = 'url(ink_lv2.gif)';
        }, 50);
    }, 50);
}