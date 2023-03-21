const urlParams = new URLSearchParams(window.location.search);
const vclid = urlParams.get('vclid');

// Store vclid in localStorage
localStorage.setItem('vclid', vclid);

document.addEventListener('DOMContentLoaded', function() {
    const orderNotesInput = document.querySelector('#Cart-note');

    // Retrieve vclid from localStorage, or use a default value if it's not present
    const vclid = localStorage.getItem('vclid') || 'unknown';

    // Write vclid to the order notes input
    orderNotesInput.value += `VCLID: ${vclid}\n`;
});


window.addEventListener('load', function() {
    const orderNotesInput = document.querySelector('#Cart-note');

    // Retrieve vclid from localStorage, or use a default value if it's not present
    const vclid = localStorage.getItem('vclid') || 'unknown';

    // Write vclid to the order notes input
    orderNotesInput.value += `VCLID: ${vclid}\n`;
});
