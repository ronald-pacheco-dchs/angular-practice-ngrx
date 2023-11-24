import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandsonComponent } from '../grandson/grandson.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, GrandsonComponent],
  templateUrl: './child.component.html'
})
export class ChildComponent {

  @Input() counter!: number;
  @Output() updateCounter = new EventEmitter<number>();
  @Output() resetCounter = new EventEmitter<void>();

  multiplicar(): void {
    this.counter = this.counter*2;
    this.updateCounter.emit(this.counter);
  }

  dividir(): void {
    this.counter = this.counter/2;
    this.updateCounter.emit(this.counter);
  }

  reset(): void {
    this.counter = 0;
    this.resetCounter.emit();
  }

}
