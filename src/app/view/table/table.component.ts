import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/model/player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'team', 'age'];

  data: Player[] = [];

  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getInfo() {
    this.data = this.playerService.getData();
    this.dataSource.data = this.data;
  }
}
