class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrade: number[] = [];
  private _worksGrade: number[] = [];

  constructor(enrollment: string, name: string, examsGrade: number[], worksGrade: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrade = examsGrade;
    this.worksGrade = worksGrade;
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get examsGrade(): number[] {
    return this._examsGrade;
  }
  public set examsGrade(value: number[]) {
    if (value.length !== 4) {
      throw new Error('O estudante precisa ter 4 notas de prova');
    }
    this._examsGrade = value;
  }

  public get worksGrade(): number[] {
    return this._worksGrade;
  }
  public set worksGrade(value: number[]) {
    if (value.length !== 2) {
      throw new Error('O estudante precisa ter 2 notas de trabalho');
    }
    this._worksGrade = value;
  }

  sumGrades(): number {
    return [...this.examsGrade, ...this.worksGrade]
      .reduce((prevGrade, curGrade) => {
        curGrade += prevGrade;
        return curGrade;
      }, 0)
  }

  gradesAverage(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrade.length + this.worksGrade.length;

    return Math.round(sumGrades / divider);
  }
}

const student1 = new Student('0001', 'Vitor', [7, 8, 8, 10], [8, 9]);
console.log(student1);
console.log('Soma das notas:', student1.sumGrades());
console.log('Média das notas:', student1.gradesAverage());

const student2 = new Student('0002', 'Cely', [9, 7, 8, 9], [9, 9]);
console.log(student2);
console.log('Soma das notas:', student2.sumGrades());
console.log('Média das notas:', student2.gradesAverage());