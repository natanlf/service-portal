import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  showAlert: boolean = false;

  drop(event: CdkDragDrop<string[]>) {
    this.showAlert = false;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let copyTodo = [...this.todo];
      if(!this.compareArrays(copyTodo, event.container.data) ) {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      } else {
        this.showAlert = true;
      }
    }
  }

  compareArrays(a1, a2){
    return JSON.stringify(a1)==JSON.stringify(a2);
  }

}
