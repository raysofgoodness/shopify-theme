
const urlParams = new URLSearchParams(window.location.search);
const vclid = urlParams.get('vclid');

localStorage.setItem('vclid', vclid);

document.addEventListener('DOMContentLoaded', function() {
    const orderNotesInput = document.querySelector('#note-vclid');
    const vclid = localStorage.getItem('vclid');

    if (vclid) {
        orderNotesInput.value += `VCLID: ${vclid}\n`;
    }
});
