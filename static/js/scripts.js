/* =========================
   SGPA TABLE ROW HANDLING
========================= */

function addRow() {
    const tbody = document.querySelector("#sgpa-table tbody");
    const addRowBtn = tbody.lastElementChild;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <input type="text" name="course[]" class="form-control" placeholder="Course Name">
        </td>
        <td>
            <select name="grade[]" class="form-select">
                <option value="">Select a grade</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
        </td>
        <td>
            <input type="number" name="credits[]" class="form-control" placeholder="Credits" min="1" step="1">
        </td>
        <td>
            <button type="button" class="btn-close" onclick="removeRow(this)"></button>
        </td>
    `;

    tbody.insertBefore(row, addRowBtn);
}

function removeRow(button) {
    button.closest("tr")?.remove();
}

/* =========================
   RING ANIMATION (SGPA + CGPA)
========================= */

function animateRings() {
    document.querySelectorAll(".sgpa-ring").forEach(ring => {
        const circle = ring.querySelector(".progress-circle");
        const text   = ring.querySelector(".sgpa-text");

        if (!circle || !text) return;

        const value = parseFloat(text.textContent) || 0;
        const max   = parseFloat(ring.dataset.max) || 10;

        const radius = 80;
        const circumference = 2 * Math.PI * radius;

        const offset = circumference * (1 - Math.min(value / max, 1));

        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;
        circle.style.transition = "none";

        requestAnimationFrame(() => {
            circle.style.transition = "stroke-dashoffset 1s ease";
            circle.style.strokeDashoffset = offset;
        });

        // color logic
        if (value >= 8) circle.style.stroke = "#28a745";
        else if (value >= 6) circle.style.stroke = "#ffc107";
        else circle.style.stroke = "#dc3545";
    });
}

/* =========================
   CGPA LIVE CALCULATION
========================= */

function updateRing(value) {
    const ring = document.getElementById("cgpa-ring");
    if (!ring) return;

    const circle = ring.querySelector(".progress-circle");
    const text   = ring.querySelector(".sgpa-text");

    const max = parseFloat(ring.dataset.max) || 10;
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference * (1 - Math.min(value / max, 1));

    circle.style.strokeDasharray = circumference;
    circle.style.transition = "stroke-dashoffset 0.6s ease";
    circle.style.strokeDashoffset = offset;

    if (value >= 8) circle.style.stroke = "#28a745";
    else if (value >= 6) circle.style.stroke = "#ffc107";
    else circle.style.stroke = "#dc3545";

    text.textContent = value.toFixed(2);
}

function calculateCGPA() {
    const creditInputs = document.querySelectorAll("input[name='credits[]']");
    const sgpaInputs   = document.querySelectorAll(".sgpa-hidden");

    let totalWeighted = 0;
    let totalCredits  = 0;

    creditInputs.forEach((creditInput, i) => {
        const c = parseFloat(creditInput.value);
        const s = parseFloat(sgpaInputs[i]?.value);

        if (!isNaN(c) && !isNaN(s)) {
            totalWeighted += c * s;
            totalCredits  += c;
        }
    });

    const cgpa = totalCredits ? totalWeighted / totalCredits : 0;
    updateRing(cgpa);
}

/* =========================
   SLIDER ↔ INPUT SYNC
========================= */

document.addEventListener("DOMContentLoaded", () => {

    // SGPA/CGPA ring animation on page load
    animateRings();

    // slider + input sync (CGPA page)
    document.querySelectorAll(".sgpa-cell").forEach(cell => {
        const slider = cell.querySelector(".sgpa-slider");
        const input  = cell.querySelector(".sgpa-input");
        const hidden = cell.querySelector(".sgpa-hidden");

        if (!slider || !input || !hidden) return;

        slider.addEventListener("input", () => {
            input.value  = slider.value;
            hidden.value = slider.value;
            calculateCGPA();
        });

        input.addEventListener("input", () => {
            let val = Math.min(10, Math.max(0, parseFloat(input.value) || 0));
            slider.value = val;
            hidden.value = val;
            calculateCGPA();
        });
    });
});
