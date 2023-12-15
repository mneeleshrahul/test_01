import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrl: './page01.component.css'
})
export class Page01Component implements OnInit {
  movies: any[] = [];

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    // Fetch movies data or initialize it
    this.movies = [
      { title: 'Movie 1', thumbnail: '...', description: '...' },
      // ... other movies
    ];
  }

  addToWatchlist(movie: any): void {
    this.watchlistService.addToWatchlist(movie);
  }
}
