let slider = document.getElementById('slider');
        let currentSlide = 0;

        function scrollRight() {
            currentSlide = (currentSlide + 1) % slider.children.length;
            slider.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
        }

        function scrollLeft() {
            currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
            slider.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
        }