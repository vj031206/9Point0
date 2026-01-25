from flask import Flask, render_template, request, redirect
from calculations import sgpa_calc, cgpa_calc

app = Flask(__name__)

app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sgpa', methods=['GET', 'POST'])
def calculate():
    sgpa = None
    courses = []
    grades = []
    credits = []

    if request.method == 'POST':
        courses = request.form.getlist('course[]')
        grades = request.form.getlist('grade[]')
        credits = request.form.getlist('credits[]')

        sgpa = sgpa_calc(credits, courses, grades)

    return render_template(
        'sgpa.html',
        sgpa=sgpa,
        courses=courses,
        grades=grades,
        credits=credits
    )

@app.route('/cgpa', methods=['GET', 'POST'])
def cgpa():
    cgpa = None
    credits = []
    sgpa_list = []

    if request.method == 'POST':
        credits = request.form.getlist('credits[]')
        sgpa_list = request.form.getlist('sgpa[]')

        credits = [float(c) for c in credits if c]
        sgpa_list = [float(s) for s in sgpa_list if s]

        cgpa = cgpa_calc(credits, sgpa_list)

    return render_template(
        'cgpa.html',
        cgpa=cgpa,
        credits=credits,
        sgpa_list=sgpa_list
    )

@app.route('/simulate')
def simulate():
    return render_template('simulate.html')

if __name__ == '__main__':
    app.run(debug=True)