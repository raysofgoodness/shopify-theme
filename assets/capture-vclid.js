document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const vclid = urlParams.get('vclid');

    localStorage.setItem('vclid', vclid);
});
