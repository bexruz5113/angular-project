/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'app/share/api.service';
import { DeleteComponent } from './delete/delete.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  id: number;
  listUsers: any = [];
  person: any;

  constructor(public dialog: MatDialog, private apiService: ApiService) {
    console.log('called constructor');
    console.log('xaxaxaa');

  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.listUsers = data;
      console.log(this.listUsers);
    });
  }


  showInfo(id): void {
    this.apiService.getUser(id).subscribe((data) => {
      this.person = data;
      console.log(this.person);
    });
  }

  addUser(): void {
    const dialogRef = this.dialog.open(PostComponent);
  }

  openDelete(id): void {
    const dialogRef = this.dialog.open(DeleteComponent, { data: { id } });
    console.log(id);
  }

  openUpdate(id): void {
    console.log(id);
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: { id }
    });
  }
}
