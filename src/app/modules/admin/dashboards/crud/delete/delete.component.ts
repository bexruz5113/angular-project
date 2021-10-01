import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'app/share/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private apiService: ApiService,
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }) { }

  ngOnInit(): void {
  }


  deleteUser(): void {
    this.apiService.deleteUser(this.data.id).subscribe((data) => {
      this.dialogRef.close();
      location.reload();
    });
  }

  cancel(): void {
    this.dialogRef.close();

  }
}

