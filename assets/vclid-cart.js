
const urlParams = new URLSearchParams(window.location.search);
const vclid = urlParams.get('vclid');

localStorage.setItem('vclid', vclid);

document.addEventListener('DOMContentLoaded', function() {
    const orderNotesInput = document.querySelector('#note-vclid');
    const submitButton = document.querySelector('form[action="/cart"] button[type="submit"]');

    submitButton.addEventListener('click', function() {
        const vclid = localStorage.getItem('vclid');
        if (vclid) {
            orderNotesInput.value += `VCLID: ${vclid}\n`;
        }
    });
});
