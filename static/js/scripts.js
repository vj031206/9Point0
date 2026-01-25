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
            <input type="number" placeholder="Credits" name="credits[]" class="form-control" min="1" step="1">
        </td>
        <td>
            <button type="button" class="btn-close" onclick="removeRow(this)"></button>
        </td>
    `;

    tbody.insertBefore(row, addRowBtn);
}

function removeRow(button) {
    button.closest("tr").remove();
}

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".sgpa-slider");
    const sgpaVals = [];
    const numSems = sliders.length;

    const cgpaCircle = document.querySelector(".simulate-right .progress-circle");
    const cgpaText = document.querySelector(".simulate-right .sgpa-text");

    function updateCGPA() {
        let sum = 0;
        sliders.forEach((s, i) => {
            const val = parseFloat(s.value);
            sgpaVals[i] = val;
            document.getElementById(`sgpa-val-${i}`).textContent = val.toFixed(2);
            sum += val;
        });
        const cgpa = (sum / numSems).toFixed(2);
        cgpaText.textContent = cgpa;

        const radius = parseFloat(cgpaCircle.getAttribute('r'));
        const circumference = 2 * Math.PI * radius;
        const offset = circumference * (1 - cgpa / 10);
        cgpaCircle.style.strokeDashoffset = offset;
    }

    sliders.forEach(s => {
        s.addEventListener("input", updateCGPA);
    });

    updateCGPA();
});

