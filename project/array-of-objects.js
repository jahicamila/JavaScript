const studentData = [ 
{ name: 'John', age: 21, grades: [85, 90, 76, 95],
major: 'Computer Science', gender: 'Male', nationality: 'USA',
scholarships: [ { name: 'Merit Scholarship', amount: 2000 }, { name: 'Research Grant', amount: 5000 }, ], },
{ name: 'Jane', age: 19, grades: [78, 92, 88, 89], major: 'Mathematics',
gender: 'Female', nationality: 'Canada', scholarships: [ { name: 'Academic Excellence Scholarship', amount: 1500 }, ], },
{ name: 'Alex', age: 20, grades: [92, 85, 79, 88], major: 'English Literature', gender: 'Male', nationality: 'UK', scholarships: [], }, {
name: 'Sarah', age: 22, grades: [95, 92, 87, 96], gender: 'Female',
nationality: 'USA', scholarships: [ { name: 'Leadership Scholarship',
amount: 3000 }, ], },
{ name: 'Michael', age: 20, grades: [90, 82, 94, 88], major: 'Chemistry',
gender: 'Male', nationality: 'Australia', scholarships: [], },
{ name: 'Emily', age: 19, grades: [88, 86, 90, 92], gender: 'Female',
nationality: 'USA', scholarships: [], },
{ name: 'Daniel', age: 21, grades: [80, 75, 85, 81], major: 'History',
gender: 'Male', nationality: 'USA', scholarships: [ { name: 'History Scholarship', amount: 2500 }, ], },
{ name: 'Olivia', age: 20, grades: [95, 92, 94, 98], major: 'Biology',
gender: 'Female', nationality: 'Canada', scholarships: [ { name: 'STEM Scholarship', amount: 2000 }, ], },
{ name: 'Ryan', age: 22, grades: [87, 84, 90, 91], major: 'Physics',
gender: 'Male', nationality: 'USA', scholarships: [], },
{ name: 'Sophia', age: 19, grades: [92, 96, 88, 90], gender: 'Female',
nationality: 'USA', scholarships: [], },
{ name: 'David', age: 21, grades: [80, 85, 82, 78], major: 'Sociology',
gender: 'Male', nationality: 'UK', scholarships: [] } ];

//1. A function that will return an array with student names
const getStudentNames = (studentData) => {
    return studentData.map((student) => student.name);
  };
  const studentNames = getStudentNames(studentData);
  console.log(studentNames);

//2. A function that will filter students by whether they have chosen a 'major' or not
const filtriranjePoMajor = (studentData) => {
    return studentData.filter((student) => {
      if (student.hasOwnProperty('major')) {
        return true;
      } else {
        return false;
      }
    });
  };
 
//3. A function that will calculate the student's average grade
const prosjecnaOcjena = (studentData) => {
    const sum = studentData.grades.reduce((total, grade) => total + grade, 0); 
    const prosjek = sum / studentData.grades.length;
    return prosjek;
  };

//4. A function that will calculate the average grade of all students
const prosjecnaOcjenaSvihStudenata = (studentData) => {
    const sveOcjene = studentData.flatMap((student) => student.grades);
    const sum = allGrades.reduce((total, grade) => total + grade, 0); 
    const prosjek = sum / sveOcjene.length;
    return prosjek;
  };
  const prosjekSvih = prosjecnaOcjenaSvihStudenata(studentData);
  console.log(prosjekSvih);

//5. A function that will find the oldest student
const pronadjiNajstarijeg = (studentData) => {
    const sortiraniStudenti = [...studentData].sort((a, b) => b.age - a.age);
    return sortiraniStudenti[0];
  };
  const najstariji = pronadjiNajstarijeg (studentData);
  console.log(najstariji);
  
//6. A function that filters students by gender and nationality
const filtriranjePoSpoluINacionalnosti = (studentData, gender, nationality) => {
    return studentData.filter((student) => {
      return student.gender === gender && student.nationality === nationality;
    });
  };
  const maleStudentsFromUSA = filtriranjePoSpoluINacionalnosti(studentData, 'Male', 'USA');
  console.log(maleStudentsFromUSA);
  const femaleStudentsFromCanada = filtriranjePoSpoluINacionalnosti(studentData, 'Female', 'Canada');
  console.log(femaleStudentsFromCanada);
  
//7. A function that filters students by gender and nationality
const stipendijeSvihStudenata = (studentData) => {
    return studentData.reduce((ukupanIznosStipendija, student) => {
      const scholarships = student.scholarships;
      const nizVrijednostiStipendija = scholarships.map((scholarship) => scholarship.amount);
      const studentTotalAmount = nizVrijednostiStipendija.reduce((sum, amount) => sum + amount, 0);
      return ukupanIznosStipendija + studentTotalAmount;
    }, 0);
  };
  
//8. A function that will return the student with the best grades
const studentSaNajboljimOcjenama = (studentData) => {
    return studentData.reduce((najbolji, trenutni) => {
      const najboljaOcjena = Math.max(...trenutni.grades);
      const najboljaOdSvih = Math.max(...najbolji.grades);
      if (najboljaOcjena > najboljaOdSvih) {
        return trenutni;
      }
      return najbolji;
    });
  };
  
//9. A function that will calculate the average age of male and female students
const prosjecnaStarostPoSpolu = (studentData, gender) => {
    const filterPolova = studentData.filter((student) => student.gender === gender);
    const ukupneGodine = filterPolova.reduce((sum, student) => sum + student.age, 0);
    const prosjek = ukupneGodine / filterPolova.length;
    return prosjek;
  };
  const prosjekMuski = prosjecnaStarostPoSpolu(studentData, 'Male');
  console.log('Prosječna starost muških studenata:', prosjekMuski);
  
  const prosjekZenski = prosjecnaStarostPoSpolu(studentData, 'Female');
  console.log('Prosječna starost ženskih studenata:', prosjekZenski);

//10. A function that will sort students by the total amount of scholarships they receive, from smallest to largest
const sortiranjePoStipendijama = (studentData) => {
    return studentData.sort((a, b) => {
      const ukupnoZaA = a.scholarships.reduce((sum, scholarship) => sum + scholarship.amount, 0);
      const ukupnoZaB = b.scholarships.reduce((sum, scholarship) => sum + scholarship.amount, 0);
      return ukupnoZaA - ukupnoZaB;
    });
  };
  const sortiraniStudenti = sortiranjePoStipendijama(studentData);
  console.log(sortiraniStudenti);

//11. A function that will sort students by grade point average, from best to worst
const sortiranjePoProsjecnojOcjeni = (studentData) => {
    return studentData.sort((a, b) => {
      const srednjaOcjenaZaA = sortiranjePoProsjecnojOcjeni(a.grades);
      const srednjaOcjenaZaB = sortiranjePoProsjecnojOcjeni(b.grades);
      return b - a;
    });
  };
  const prosjecneOcjene = (grades) => {
    const suma = grades.reduce((total, grade) => total + grade, 0);
    return suma / grades.length;
  };
  const sortirani = sortiranjePoProsjecnojOcjeni(studentData);
  console.log(sortirani);

//12. A function that will sort students by the countries they come from, alphabetically sort the countries, 
//the function should return an object that will have the names of the countries as properties, and the value 
//of those properties will be an array of objects of students coming from the specified countries
const sortiranjePoDrzavama = (studentData) => {
    const sortedStudents = [...studentData].sort((a, b) => {
      const drzavaA = a.nationality.toUpperCase();
      const drzavaB = b.nationality.toUpperCase();
      if (drzavaA < drzavaB) {
        return -1;
      }
      if (drzavaA > drzavaB) {
        return 1;
      }
      return 0;
    });
  
    const sortiraniStudentiPoDrzavama = {};
    sortedStudents.forEach((student) => {
      const drzava = student.nationality;
      if (!sortiraniStudentiPoDrzavama.hasOwnProperty(drzava)) {
        sortiraniStudentiPoDrzavama[drzava] = [];
      }
      sortiraniStudentiPoDrzavama[drzava].push(student);
    });
  
    return sortiraniStudentiPoDrzavama;
  };
  const sortiraniStudent = sortiranjePoDrzavama(studentData);
  console.log(sortiraniStudent);

//13. A function that will find all students whose grades are improving, 
//e.g. if a student has grades [60, 70, 80], that student will be included in the array returned by the function
const studentSaPoboljsanjem = (studentData, prag) => {
    return studentData.filter((student) => {
      const ocjene = student.grades;
      const poboljsanje = grades.some((grade) => grade < prag);
      return poboljsanje ;
    });
  };
  const improvingStudents = studentSaPoboljsanjem(studentData, 70);
  console.log(improvingStudents);
