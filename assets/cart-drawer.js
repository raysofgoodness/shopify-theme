document.querySelectorAll('[data-card-add]').forEach(form => {
   form.addEventListener('submit', async (e) => {
      e.preventDefault();

       await fetch('/cart/add', {
           method: "post",
           body: new FormData(form)
       });

       document.querySelector('.cart-drawer').classList.add('cart-drawer--active');

   });
});
