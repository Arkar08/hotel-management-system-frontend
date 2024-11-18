import { Component, OnInit ,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent implements OnInit {
  transactionId = ''
  transactionDetails :any;
  loading:boolean = true;
   constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service:ApiService , private dialogRef:MatDialogRef<ViewTransactionComponent>){
    this.transactionId = data;
   }
   ngOnInit(): void {
    this.getTransactions()
   }


   getTransactions(){
    this.loading = true;
      this.service.getData(`staff/transactions/${this.transactionId}`).subscribe((res:any)=>{
        this.transactionDetails = res;
        this.loading = false;
      },error =>{
        console.log(error , 'gettransactionId error is')
      })
   }

   cancel(){
    this.dialogRef.close()
   }
}
