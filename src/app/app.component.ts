import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';

  tasklist: any[] = [];

  addTask(data: string) {
    this.tasklist.push({ id: this.tasklist.length, name: data });
    this.handleClear();
  }

  Remove(id: number) {
    this.tasklist = this.tasklist.filter((data) => data.id !== id);
  }

  handleClear() {
    this.name = ' ';
  }
}
