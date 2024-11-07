import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemsService } from '../../services/items/items.service';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { Product } from '../../core/interfaces/products';
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent, NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { PricePipe } from '../../core/pipes/price.pipe';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterLink, PricePipe ,SearchPipe,FormsModule ,NgxSpinnerModule , NgxSpinnerComponent ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit {
  private readonly spinner=inject(NgxSpinnerService)
private readonly _ItemsService=inject(ItemsService)
  allItems:any;
  searchterm:string ="";

  
  displayItems=()=>{
    this.spinner.show()
    this._ItemsService.getItemsItemsApi().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.allItems=res.data
       this.spinner.hide()
       


      },
      error : (err) =>{console.log(err)}
    })
  }



  


  ngOnInit(): void {
    this.displayItems()
  }










 


  
}


