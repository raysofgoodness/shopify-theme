const urlParams = new URLSearchParams(window.location.search);
const vclid = urlParams.get('vclid');

localStorage.setItem('vclid', vclid);

window.addEventListener('beforeunload', function() {
    const vclid = localStorage.getItem('vclid');
    sessionStorage.setItem('vclid', vclid);
});

document.addEventListener('DOMContentLoaded', function() {
    const orderNotesInput = document.querySelector('#Cart-note');
    const vclid = localStorage.getItem('vclid');

    if (vclid) {
        orderNotesInput.value += `VCLID: ${vclid}\n`;
    }
});

