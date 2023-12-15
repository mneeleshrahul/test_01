import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})


export class WatchlistComponent implements OnInit {
  watchlistItems: any[] = [];

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistItems = this.watchlistService.getWatchlist();
  }

  removeFromWatchlist(item: any): void {
    this.watchlistService.removeFromWatchlist(item);
    this.watchlistItems = this.watchlistService.getWatchlist();
  }
}
