def sgpa_calc(credits, courses, grades):
    grade_map = {
        'A+': 10, 'A': 9, 'B': 8, 'C': 7, 'D': 6, 'F': 0
    }

    total_weighted_points = 0
    total_credits = 0

    for i in range(len(courses)):
        if grades[i] and credits[i]:
            point = grade_map.get(grades[i], 0)
            cred = int(credits[i])

            total_weighted_points += (point * cred)
            total_credits += cred

    if total_credits > 0:
        return round(total_weighted_points / total_credits, 2)

def cgpa_calc(credits, sgpa_list):
    total_weighted = sum(c * s for c, s in zip(credits, sgpa_list))
    total_credits = sum(credits)
    if total_credits == 0:
        return 0
    return round(total_weighted / total_credits, 2)