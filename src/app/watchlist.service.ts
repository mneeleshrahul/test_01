import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WatchlistService {
  private watchlist: any[] = [];

  addToWatchlist(item: any): void {
    this.watchlist.push(item);
  }

  removeFromWatchlist(item: any): void {
    const index = this.watchlist.indexOf(item);
    if (index !== -1) {
      this.watchlist.splice(index, 1);
    }
  }

  getWatchlist(): any[] {
    return this.watchlist;
  }
}
