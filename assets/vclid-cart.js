class PageData {
    constructor() {
        this.orderNotesInput = document.querySelector('#Cart-note');
        this.urlParams = new URLSearchParams(window.location.search);
        this.vclid = this.urlParams.get('vclid');
    }

    setPageData() {
        if (!this.vclid) {
            const storedVclid = sessionStorage.getItem('vclid');
            if (storedVclid) {
                this.orderNotesInput.value = storedVclid;
            }
        } else {
            sessionStorage.setItem('vclid', this.vclid);
            this.orderNotesInput.value = this.vclid;
        }
    }
}

const pageData = new PageData();
pageData.setPageData();



