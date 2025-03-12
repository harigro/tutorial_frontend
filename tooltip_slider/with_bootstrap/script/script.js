document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const tooltip = document.getElementById("tooltip");
    const icon = document.getElementById("icon");

    function updateTooltip() {
        tooltip.textContent = slider.value;
        let sliderRect = slider.getBoundingClientRect();
        let thumbPosition = ((slider.value - slider.min) / (slider.max - slider.min)) * sliderRect.width;
        tooltip.style.left = `${thumbPosition}px`;
    }

    function updateIcon() {
        let value = slider.value;
        if (value > 60) {
            icon.className = "fas fa-volume-up"; // 🔊 Volume besar
        } else if (value <= 20) {
            icon.className = "fas fa-volume-off"; // 🔉 Volume kecil
        } else {
            icon.className = "fas fa-volume-down"; // 🔈 Volume sedang
        }
    }

    slider.addEventListener("mousedown", function() {
        tooltip.classList.add("show");
        updateTooltip();
    });

    slider.addEventListener("mouseup", function() {
        tooltip.classList.remove("show");
    });

    slider.addEventListener("mouseleave", function() {
        tooltip.classList.remove("show");
    });

    slider.addEventListener("input", function() {
        updateTooltip();
        updateIcon();
    });

    updateTooltip();
    updateIcon();
});