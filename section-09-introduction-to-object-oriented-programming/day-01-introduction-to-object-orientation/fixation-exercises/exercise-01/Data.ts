export default class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    const dateToString = `${year}/${month}/${day}`

    if (new Date(dateToString).getDate() !== day) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  public get day(): number {
    return this._day;
  }
  public set day(value: number) {
    this._day = value;
  }

  public get month(): number {
    return this._month;
  }
  public set month(value: number) {
    this._month = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }

  getMonthName(): string {
    const month = this.month;
    let monthStr = '';

    switch (month) {
      case 1: monthStr = 'January'       
        break;
      case 2: monthStr = 'February'       
        break;
      case 3: monthStr = 'March'       
        break;
      case 4: monthStr = 'April'       
        break;
      case 5: monthStr = 'May'       
        break;
        case 7: monthStr = "July";
        break;
      case 8: monthStr = "August";
        break;
      case 9: monthStr = "September";
        break;
      case 10: monthStr = "October";
        break;
      case 11: monthStr = "November";
        break;
      case 12: monthStr = "December";
        break;
      default:
        break;
    }

    return monthStr;
  }

  isLeapYear(): boolean {
    const year = this.year;
    
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      return true;
    } else {
      return false;
    }
  }

  compare(date: Data): number {
    const currentDateStr = `${this.year}/${this.month}/${this.day}`;

    const dateStr = `${date.year}/${date.month}/${date.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;

  }

  format(formatting: string): string {

    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 
      ? this.month.toString() 
      : `0${this.month.toString()}`;

    const year = this.year.toString();

    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName()).replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;

  }

}

const date = new Data(17, 4, 1994);
console.log(date);
console.log('O mês é:', date.getMonthName());
console.log('O ano é bissexto?:', date.isLeapYear());

const otherDate = new Data(30, 1, 1992);
const compared = date.compare(otherDate);
const compareStates = ['anterior', 'igual', 'posterior'];
console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

console.log(date.format('dd/mm/aaaa'));
console.log(date.format('dd-mm-aaaa'));
console.log(date.format('aaaa/mm/dd'));
console.log(date.format('aaaa-mm-dd'));
console.log(date.format('dd de M de aa'));
console.log(date.format('dd, M de aaaa'));