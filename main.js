function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function toggleTheme() {
    const root = document.documentElement;
    const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();

    if (currentBg === '#000') {
        root.style.setProperty('--bg-color', '#fff');
        root.style.setProperty('--text-color', '#000');
        root.style.setProperty('--hover-bg-color', '#ddd');
    } else {
        root.style.setProperty('--bg-color', '#000');
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--hover-bg-color', '#575757');
    }
}