const studentResult = (...arg) => {

    let studentName = arg[0]
    let mark1 = arg[1]
    let mark2 = arg[2]
    let mark3 = arg[3]

    let total = mark1 + mark2 + mark3
    let average = total / 3

    let grade = ""
    if (average >= 90) {
        grade = "A"
    } else if (average >= 75) {
        grade = "B"
    } else if (average >= 50) {
        grade = "C"
    } else {
        grade = "Fail"
    }

    const result = {
        "studentName": studentName,
        "mark1": mark1,
        "mark2": mark2,
        "mark3": mark3,
        "total": total,
        "average": average,
        "grade": grade
    }

    return result
}

// Function call
let studentDetails = studentResult("Tejesh", 85, 78, 92)
console.log(studentDetails)