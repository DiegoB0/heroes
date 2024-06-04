import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  data: Player[] = [
    { position: 1, name: 'Lionel Messi', team: 'Paris Saint-Germain', age: 34 },
    {
      position: 2,
      name: 'Cristiano Ronaldo',
      team: 'Manchester United',
      age: 37,
    },
    { position: 3, name: 'Neymar Jr.', team: 'Paris Saint-Germain', age: 30 },
    {
      position: 4,
      name: 'Kylian Mbappe',
      team: 'Paris Saint-Germain',
      age: 23,
    },
    { position: 5, name: 'Robert Lewandowski', team: 'Bayern Munich', age: 33 },
    { position: 6, name: 'Kevin De Bruyne', team: 'Manchester City', age: 30 },
    { position: 7, name: 'Virgil van Dijk', team: 'Liverpool', age: 30 },
    { position: 8, name: 'Sergio Ramos', team: 'Paris Saint-Germain', age: 35 },
    { position: 9, name: 'Luka Modric', team: 'Real Madrid', age: 36 },
    { position: 10, name: 'Karim Benzema', team: 'Real Madrid', age: 34 },
  ];
  constructor() {}

  getData() {
    return this.data;
  }

  addData(player: Player) {
    this.data.push(player);
  }
}
