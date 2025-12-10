const toggleMenu = () => {
    const mymenu = document.querySelector('.mymenu');
    const overlay = document.querySelector('.overlay');
    mymenu.classList.toggle('open');
    overlay.classList.toggle('hidden');
};
