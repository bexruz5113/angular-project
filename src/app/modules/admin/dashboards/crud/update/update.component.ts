import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'app/share/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Share } from 'app/share/share';


@Component({
  selector: 'app-enjoy',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id: number;
  userData: any = {};

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Share) { }

  ngOnInit(): void {
    this.loadUser();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  loadUser() {
    return this.apiService.getUser(this.data.id).subscribe((data) => {
      this.userData = data;
    });
  }

  updateUser(): void {
    this.apiService.updateUser(this.data.id, this.userData).subscribe((data) => {
      location.reload();
      this.dialogRef.close();
    });
  }
}
