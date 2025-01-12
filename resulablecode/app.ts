import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css'],
})
export class CrewListComponent {
  @Input() isSticky = false; // To control stickiness from parent
  isTableOpen = false;

  // Table Data
  displayedColumns: string[] = ['position', 'name'];
  dataSource = [
    { position: 1, name: 'Crew Member 1' },
    { position: 2, name: 'Crew Member 2' },
    { position: 3, name: 'Crew Member 3' },
    { position: 4, name: 'Crew Member 4' },
    { position: 5, name: 'Crew Member 5' },
  ];

  toggleTable() {
    this.isTableOpen = !this.isTableOpen;
  }
}
