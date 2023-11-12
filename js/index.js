class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = Array(25).fill(undefined);
        this.classesAttended = 0;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    present() {
        if (this.classesAttended < 25) {
            this.attendance[this.classesAttended] = true;
            this.classesAttended++;
        } else {
            console.log("Невозможно посетить более 25 занятий.");
        }
    }

    absent() {
        if (this.classesAttended < 25) {
            this.attendance[this.classesAttended] = false;
            this.classesAttended++;
        } else {
            console.log("Невозможно посетить более 25 занятий");
        }
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }

        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendanceRate = this.classesAttended / 25;

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Хорошо";
        } else if (averageGrade > 70 || attendanceRate > 0.7) {
            return "Такое себе";
        } else {
            return "Плохо!";
        }
    }
}

const student1 = new Student("Славик", "Рымар", 1998);
const student2 = new Student("Маша", "Рымар", 1997);

student1.addGrade(95);
student1.addGrade(87);
student1.addGrade(92);
student1.present();
student1.present();
student1.present();
student1.absent();

student2.addGrade(78);
student2.addGrade(88);
student2.addGrade(94);
student2.absent();
student2.present();
student2.present();

console.log("Студент 1:");
console.log("Возраст: " + student1.getAge());
console.log("Средний балл: " + student1.calculateAverageGrade());
console.log("Результат: " + student1.summary());

console.log("Студент 2:");
console.log("Возраст: " + student2.getAge());
console.log("Средний балл: " + student2.calculateAverageGrade());
console.log("Результат: " + student2.summary());