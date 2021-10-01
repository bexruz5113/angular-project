import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'app/share/api.service';

@Component({
  selector: 'app-enjoy',
  templateUrl: './enjoy.component.html',
  styleUrls: ['./enjoy.component.scss']
})
export class EnjoyComponent implements OnInit {
  bases2: Array<string> = ['cdscsd', 'csdcsdcsd', 'csdcsdcsdc', 'csdcsdcsdc'];

  // bases: any[];
  formValue!: FormGroup;
  api: any;
  apiUsers: any;
  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    // this.bases;
    // this.apiservice.apiUsers();

    this.addUserForm = this.formBuilder.group({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'birth': new FormControl(''),
      'country': new FormControl('')

    });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // postCrudDetails(){
  //   this.apiService.postcrud(this.addUserForm.value).subscribe((data) =>{
  //     console.log('success');
  //   },(err) =>{
  //     console.log(err);
  //   });}
}
