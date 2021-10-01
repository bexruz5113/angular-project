import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'app/share/api.service';
import { Share } from 'app/share/share';

@Component({
  selector: 'app-enjoy',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() person = { name: '', email: '', birth: '', country: '', date: '' };

  constructor(private apiService: ApiService,
    public dialogRef: MatDialogRef<PostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }) { }

  ngOnInit(): void {
  }
  addUser(person): void {
    this.apiService.createUser(this.person).subscribe((data) => {
      console.log(data);
      location.reload();
      this.dialogRef.close();
    });
  }
}
