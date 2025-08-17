import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies = signal<Movie[]>([
    {
      id: crypto.randomUUID(),
      title: 'Barbie',
      genre: 'Komedia',
      rating: 4,
    },
  ]);

  addMovie(movie: Movie) {
    this.movies.update((previousValue) => [...previousValue, movie]);
  }

  resetMovies() {
    this.movies.set([]);
  }

  countMovies = computed(() => this.movies().length);
}

type Movie = {
  id: string;
  title: string;
  genre: string;
  rating: number;
};
