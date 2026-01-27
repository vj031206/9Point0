document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".sgpa-slider");
    const inputs  = document.querySelectorAll(".sgpa-input");
    const hiddens = document.querySelectorAll(".sgpa-hidden");

    sliders.forEach((slider, i) => {
        slider.addEventListener("input", () => {
            inputs[i].value  = slider.value;
            hiddens[i].value = slider.value;
        });
    });

    inputs.forEach((input, i) => {
        input.addEventListener("input", () => {
            let val = Math.min(10, Math.max(0, input.value || 0));
            sliders[i].value = val;
            hiddens[i].value = val;
        });
    });
});

function updateRing(value) {
    const ring = document.querySelector(".sgpa-ring");
    const circle = ring.querySelector(".progress-circle");
    const text = ring.querySelector(".sgpa-text");

    const max = parseFloat(ring.dataset.max);
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    const percent = Math.min(value / max, 1);
    const offset = circumference * (1 - percent);

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;

    if (value >= 8) circle.style.stroke = "#28a745";
    else if (value >= 6) circle.style.stroke = "#ffc107";
    else circle.style.stroke = "#dc3545";

    text.textContent = value.toFixed(2);
}

function calculateCGPA() {
    const creditInputs = document.querySelectorAll("input[name='credits[]']");
    const sgpaInputs = document.querySelectorAll(".sgpa-hidden");

    let totalWeighted = 0;
    let totalCredits = 0;

    creditInputs.forEach((creditInput, i) => {
        const c = parseFloat(creditInput.value);
        const s = parseFloat(sgpaInputs[i].value);

        if (!isNaN(c) && !isNaN(s)) {
            totalWeighted += c * s;
            totalCredits += c;
        }
    });

    const cgpa = totalCredits ? totalWeighted / totalCredits : 0;
    updateRing(cgpa);
}

document.addEventListener("input", (e) => {
    const cell = e.target.closest(".sgpa-cell");
    if (!cell) return;

    const slider = cell.querySelector(".sgpa-slider");
    const input  = cell.querySelector(".sgpa-input");
    const hidden = cell.querySelector(".sgpa-hidden");

    if (e.target === input) {
        hidden.value = input.value;
        calculateCGPA();
        return;
    }

    if (e.target === slider) {
        input.value = slider.value;
        hidden.value = slider.value;
        calculateCGPA();
    }
});

