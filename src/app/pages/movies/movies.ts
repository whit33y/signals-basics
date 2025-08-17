import { Component, effect, inject } from '@angular/core';
import { MoviesService } from '../../services/movies-service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-movies',
  imports: [ReactiveFormsModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  movieService = inject(MoviesService);
  // constructor(private movieService: MoviesService){}

  constructor() {
    effect(() => {
      console.log('Sygnał się zmienił: ', this.movieService.movies());
    });
  }

  ngOnInit() {
    // console.log(this.movieService.movies());
  }

  addMovie(title: string, genre: string, rating: number) {
    this.movieService.addMovie({
      id: crypto.randomUUID(),
      title,
      genre,
      rating,
    });
  }

  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    rating: new FormControl(1, Validators.required),
  });
}
