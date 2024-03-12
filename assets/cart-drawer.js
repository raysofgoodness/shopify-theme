const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

addToCartForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();

        await fetch('/cart/add', {
            method: 'post',
            body: new FormData(form),
        });

        const res = await fetch('/cart.json');
        const cart = await res.json();

        console.log(cart);

        const cartCountBubble = document.querySelector('.cart-count-bubble');
        if (cartCountBubble) {
            if (cart.item_count < 100) {
                cartCountBubble.innerHTML = `<span aria-hidden="true">${cart.item_count}</span><span class="visually-hidden">{{ 'sections.header.cart_count' | t: count: cart.item_count }}</span>`;
            }
        } else {
            const cartIconBubble = document.querySelector('#cart-icon-bubble');
            if (cartIconBubble) {
                cartIconBubble.innerHTML += `<div class="cart-count-bubble"><span aria-hidden="true">${cart.item_count}</span><span class="visually-hidden">{{ 'sections.header.cart_count' | t: count: cart.item_count }}</span></div>`;
            }
        }
    });
});

