const urlParams = new URLSearchParams(window.location.search);
const vclid = urlParams.get('vclid');

localStorage.setItem('vclid', vclid);

document.addEventListener('DOMContentLoaded', function() {
    const orderNotesInput = document.querySelector('#Cart-note');
    let savedNote = localStorage.getItem('note');
    const vclid = localStorage.getItem('vclid');

    if (vclid) {
        savedNote = savedNote ? `${savedNote}\nVCLID: ${vclid}` : `VCLID: ${vclid}`;
    }

    orderNotesInput.value = savedNote;

    orderNotesInput.addEventListener('input', function() {
        localStorage.setItem('note', orderNotesInput.value);
    });
});


