# 9Point0 - GPA & CGPA Calculator and Simulator

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=webmoney)](https://9-point0.vercel.app)
[![YouTube Demo](https://img.shields.io/badge/Video-Demo-red?style=for-the-badge&logo=youtube)](https://youtu.be/pj6gQF0lzzY)

[![Python](https://img.shields.io/badge/Python-3.11-blue)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.3.2-lightgrey)](https://flask.palletsprojects.com/)
[![GitHub](https://img.shields.io/badge/GitHub-vj031206-black?logo=github)](https://github.com/vj031206/9Point0)
[![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)

---

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation & Running Locally](#installation--running-locally)
- [Usage](#usage)
- [Future Plans](#future-plans)
- [Links](#links)
- [License](#license)

---

## Description

**9Point0** is a web application for students to calculate and simulate GPA and CGPA effortlessly.
Users can input course names, credits, and grades for multiple semesters, see semester GPA and cumulative CGPA instantly, and explore “what-if” scenarios by adjusting grades or credits.

The project demonstrates full-stack web development using **Python**, **Flask**, and **Jinja2**, combined with a dynamic frontend built using **HTML, CSS, and JavaScript**.

---

## Features

- Instant **GPA & CGPA Calculation**.
- Support for **multiple semesters**.
- **Dynamic course management** (add/remove courses).
- **Simulation mode** to test different scenarios.
- Input validation for accurate results.
- Clean and simple UI for ease of use.

---

## Screenshots

**Dashboard**

<img width="1855" height="902" alt="Screenshot 2026-02-06 033616" src="https://github.com/user-attachments/assets/326b8159-2719-4cf9-90a2-5da64c3c93da" />

**SGPA Page**

<img width="1873" height="898" alt="Screenshot 2026-02-06 033714" src="https://github.com/user-attachments/assets/a1472bc6-92c6-44a5-8c64-a39b2e1bcd20" />

**CGPA Page**

<img width="1873" height="886" alt="Screenshot 2026-02-06 033737" src="https://github.com/user-attachments/assets/788bbea6-68bb-4c27-808e-0137cf95e36c" />

---

## Tech Stack

- **Backend:** Python, Flask
- **Frontend:** HTML, CSS, JavaScript, Jinja2
- **Styling:** Bootstrap (optional)
- **Deployment:** Vercel

---

## Installation & Running Locally

1. **Clone the repository**
```bash
git clone https://github.com/vj031206/9Point0.git
cd 9Point0
```

2. **Create a virtual environment (optional)**
```bash
python -m venv venv
source venv/bin/activate      # Linux / Mac
venv\Scripts\activate         # Windows
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run the Flask app**
```bash
python app.py
```

5. **Open in browser**
   - Visit http://127.0.0.1:5000 to use the app

## Usage

1. Enter semester and course details (course name, credits, grade).
2. Click **Calculate GPA** to view semester GPA.
3. Add more semesters to compute cumulative CGPA.
4. Adjust grades/credits in simulation mode to explore different scenarios.

## Future Plans

- Fully mobile-responsive layout
- Interactive dashboard with charts/statistics
- Export data in CSV/PDF format
- Persistent user accounts to save GPA/CGPA history

## Links

- **Live Demo:** https://9-point0.vercel.app
- **YouTube Demo:** https://youtu.be/pj6gQF0lzzY
- **GitHub Repo:** https://github.com/vj031206/9Point0

## License

This project is open-source under the MIT License.
