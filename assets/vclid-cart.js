function setPageData() {
    const urlParams = new URLSearchParams(window.location.search);
    const vclid = urlParams.get('vclid');
    const orderNotesInput = document.querySelector('#Cart-note');

    if (!vclid) {
        const storedVclid = sessionStorage.getItem('vclid');

        if (storedVclid) {
            orderNotesInput.value = storedVclid;
        }
    } else {
        sessionStorage.setItem('vclid', vclid);
        orderNotesInput.value = vclid;
    }
}

setPageData();


