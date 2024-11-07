import { Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';

export const routes: Routes = [
    {path : 'home' , component : ItemsComponent} , 
    {path : '' , redirectTo  : 'home' , pathMatch : 'full'},

];
