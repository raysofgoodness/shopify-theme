const urlParams = new URLSearchParams(window.location.search);
const vclid = urlParams.get('vclid');

sessionStorage.setItem('vclid', vclid);

window.addEventListener('beforeunload', function() {
    const vclid = sessionStorage.getItem('vclid');
    sessionStorage.setItem('vclid', vclid);
});

document.addEventListener('DOMContentLoaded', function() {
    const orderNotesInput = document.querySelector('#Cart-note');
    const vclid = sessionStorage.getItem('vclid');

    if (vclid) {
        orderNotesInput.value += `VCLID: ${vclid}\n`;
    }
});

