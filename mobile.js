document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const formContainer = document.querySelector('.search-container');
        const expandableElements = document.querySelectorAll('.expandable');
        const removeIcon = document.getElementById('remove-expanded-icon');
        const returnLocationWrapper = document.getElementById('returnLocationWrapper');
        const returnLocationButton = document.querySelector('.return-location');
        const promoCodeField = document.querySelector('.promo-code');
        const promoCodeToggle = document.getElementById('promo-code-toggle');

        expandableElements.forEach(element => {
            element.addEventListener('click', function () {
                if (!formContainer.classList.contains('expanded')) {
                    formContainer.classList.add('expanded');
                    document.querySelectorAll('.return-location, .data-picker-container, .residence-and-age, .check-box, .input-wrapper, .submit-btn, .promo-code, #returnLocationWrapper')
                        .forEach(el => el.classList.add('expanded'));
                    removeIcon.style.display = 'inline';
                }
            });
        });

        removeIcon.addEventListener('click', function () {
            formContainer.classList.remove('expanded');
            document.querySelectorAll('.return-location, .data-picker-container, .residence-and-age, .check-box, .input-wrapper, .submit-btn, .promo-code, #returnLocationWrapper')
                .forEach(el => el.classList.remove('expanded'));
            removeIcon.style.display = 'none';
            returnLocationButton.classList.remove('hidden');
            returnLocationWrapper.classList.add('hidden');
            if (promoCodeField.classList.contains('active')) {
                promoCodeField.classList.remove('active');
                promoCodeToggle.checked = false;
            }
        });
    }
});