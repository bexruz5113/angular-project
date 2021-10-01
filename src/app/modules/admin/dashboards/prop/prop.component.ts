/* eslint-disable eqeqeq */
import { Component, DoCheck, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'app/share/api.service';
import { ListComponent } from './list/list.component';




@Component({
  selector: 'prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss'],
})
export class PropComponent implements OnInit, DoCheck {

  counter = 0;



  checked = false;
  disabled = false;
  questionCount: number = 0;
  buttonTitle: string = 'Next';
  iconShow: boolean = true;
  backShow: boolean = true;

  stopTimer: any;
  time: 0;
  dt = new Date(new Date().setTime(0));
  ctime = this.dt.getTime();
  seconds = Math.floor((this.ctime % (1000 * 60)) / 1000);
  minuts = Math.floor((this.ctime % (1000 * 60 * 60)) / (1000 * 60));
  formatedSec: any = '00';
  formatedMin: any = '00';

  userAnswer: any = [];
  inputCheck: boolean = false;
  questions: any = [];
  listTest: any = [];
  // counter: number = 0;



  // selectedCategory: Array<number> = [];
  // disable: boolean;
  // slideIndex: number = 1;
  constructor(public dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit(): void {
    this.formatedSec = '00';
    this.formatedMin = '00';
    this.time = 0;
    this.timer();
    this.apiService.getTests().subscribe((data) => {
      this.listTest = data;
      console.log(data);
      this.slideShow(data[0].id);
    });
  }

  ngDoCheck(): void {
    // this.selected.push(value);
    // this.questions.id === 1;
    // this.isBackButtonDisabled();
    // this.isNextButtonDisabled();
    // console.log('selected' + this.selected);
  }







  openDialog(): void {
    const dialogRef = this.dialog.open(ListComponent);
  }

  // onProfitSelectionChange(entry): void {
  //   this.model.ForeignCompany.ProfitCode = entry;
  // }

  // getValue(value): void {
  //   this.selected.push(value);
  // }


  // isBackButtonDisabled(): boolean {
  //   return this.questions.id == 1;
  // }
  // isNextButtonDisabled(): boolean {
  //   return this.questions.id == 10;
  // }


  // eslint-disable-next-line @typescript-eslint/naming-convention
  // category(id): void {
  //   console.log('value' + ' ' + id.target.value);
  // this.add = id.target.value;
  // this.selectedCategory.push(this.add);
  // console.log(this.selectedCategory);
  // this.selectedCategory.unshift(value);
  // }


  slideShow(id): void {
    // console.log(this.selected);
    this.apiService.getTest(id).subscribe((data) => {
      this.questions = data;
      console.log('slideShow: ' + this.questions.id);
    });
    // this.disable = (this.questions.id == 1);
  }

  toggleClass(item: number, quesNumber: number): void {
    this.userAnswer.push({ question: quesNumber, selected: item });
    document.getElementById(`addStyle${quesNumber}`).classList.add('checked');
    const quiz = {
      question: quesNumber,
      selected: item,
    };

    window.localStorage.setItem(`quiz${quesNumber}`, JSON.stringify(quiz));
    console.log(quiz);

    window.localStorage.getItem('quizSelected');

    console.log(this.userAnswer);

    // const body: bodyQuestion = {
    //   question: quesNumber,
    //   selected: item
    // };
    // if (this.userAnswer.length) {
    //   for (const data of this.userAnswer) {
    //     console.log(data.question != quesNumber ? true : false, 'aaaaaaaa',);
    //     if (data.question != quesNumber) {
    //       this.userAnswer.push(body);
    //     }
    //     // update
    //   }
    // } else {
    //   this.userAnswer.push(body);
    // }

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    // for (let i = 0; i < this.userAnswer.length; i++) {
    //   if (this.userAnswer.length) {
    //     // this.inputCheck[i] = true;
    //     document.getElementById(`addStyle${quesNumber}`).classList.add('checked');
    //   }
    // }
    // console.log('javoblar => ' + this.userAnswer);
    // console.log('item => ' + item);
  }


  timer(): void {
    this.stopTimer = setInterval(() => {
      this.time++;
      if (this.seconds < 59) {
        this.seconds++;
      } else {
        this.seconds = 0;
        this.minuts++;
      }
      this.formatedSec = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`;
      this.formatedMin = this.minuts < 10 ? `0${this.minuts}` : `${this.minuts}`;
    }, 1000);
  }
  back(): void {
    if (this.questions[0]) {
      this.backShow = false;
    }
    const index = --this.questions.id;
    this.questions = this.listTest[index];

    // const index = this.questions.id;
    // this.questions = this.listTest[index];

    // this.isBackButtonDisabled();
  }
  next(): void {

    if (this.questions.id === this.listTest.length - 1) {
      this.buttonTitle = 'Finish';
      this.iconShow = false;
    }

    const index = this.questions.id;
    this.questions = this.listTest[index];
    // const index = this.questions.id;
    // this.isBackButtonDisabled();
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface bodyQuestion {
  question: number;
  selected: number;
};
