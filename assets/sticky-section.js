class StickySection extends HTMLElement {
    constructor() {
        super();
        this.section = document.querySelector('[data-sticky]');
        this.lastScrollPosition = window.scrollY || document.documentElement.scrollTop;
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
        const scrollDifference = currentScrollPosition - this.lastScrollPosition;

        if (scrollDifference > 0 && currentScrollPosition > 100) {
            this.section.classList.add('sticky-product--active');
        } else if (scrollDifference < 0) {
            this.section.classList.remove('sticky-product--active');
        }

        this.lastScrollPosition = currentScrollPosition;
    }
}

customElements.define('[data-sticky]', StickySection);
