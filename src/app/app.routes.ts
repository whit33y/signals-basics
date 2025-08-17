import { Routes } from '@angular/router';
import { Movies } from './pages/movies/movies';

export const routes: Routes = [{ path: '**', component: Movies }];
