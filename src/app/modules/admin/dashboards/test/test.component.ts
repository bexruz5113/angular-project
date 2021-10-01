import { Component, OnInit, ViewChild, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'app/share/api.service';
import { add } from 'lodash';
import { PaginationInstance } from 'ngx-pagination/dist/pagination-instance';
import SwiperCore, { Swiper, Navigation, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination]);



@Component({
  selector: 'appTest',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
}) export class TestComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;


  collection: any = [];
  page: any;
  maxSize = 12;

  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 1,
    currentPage: 1
  };

  sum: number;
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

  constructor(public dialog: MatDialog, private apiService: ApiService) { }
  // slideNext(): void {
  //   this.swiper.swiperRef.slideNext(100);
  // }
  // slidePrev(): void {
  //   this.swiper.swiperRef.slidePrev(100);
  // }
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

    console.log(this.page);


  }


  slideShow(id): void {
    this.apiService.getTest(id).subscribe((data) => {
      this.questions = data;
      console.log('slideShow: ' + this.questions.id);
    });
  }

  // toggleClass(item: number, quesNumber: number): void {
  //   this.userAnswer.push({ question: quesNumber, selected: item });
  //   document.getElementById(`addStyle${quesNumber}`).classList.add('checked');
  //   // const quiz = {
  //   //   question: quesNumber,
  //   //   selected: item,
  //   // };
  //   // window.localStorage.setItem(`quiz${quesNumber}`, JSON.stringify(quiz));
  //   // console.log(quiz);
  //   // window.localStorage.getItem('quizSelected');
  //   // console.log(this.userAnswer);
  // }

  toggleClass(item: number, quesNumber: number): void {
    this.userAnswer.push({ question: quesNumber, selected: item });
    document.getElementById('config.id').classList.add('checked');

    // console.log(this.userAnswer);
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

  next(): void {
    this.swiper.swiperRef.slideNext();

    if (this.questions.id === this.listTest.length - 1) {
      this.buttonTitle = 'Finish';
      this.iconShow = false;
    }
    const index = this.questions.id;
    this.questions = this.listTest[index];

  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface bodyQuestion {
  question: number;
  selected: number;
};
