const sliderPriceRange = document.querySelector('#price-range-slider');

if(sliderPriceRange) {
    noUiSlider.create(sliderPriceRange, {
        start: [0, 10000],
        connect: true,
        step: 1,
        range: {
            'min': [0],
            'max': [10000]
        }
    });

    const inputMin = document.querySelector('[data-field-currency="min"]');
    const inputMax = document.querySelector('[data-field-currency="max"]');
    const inputs = [inputMin, inputMax];

    sliderPriceRange.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    sliderPriceRange.noUiSlider.on('slide', function (values, handle) {
        inputs[0].max = Math.round(values[1]);
        inputs[1].min = Math.round(values[0]);
        inputs[1].max = Math.round(values[1]);
    });

    inputs.forEach((el, i) => {
        el.addEventListener('change', (e) => {
            sliderPriceRange.noUiSlider.set([inputMin.value, inputMax.value]);
        });
    });
}
