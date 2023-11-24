import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grandson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grandson.component.html'
})
export class GrandsonComponent {
  
  @Input() counter!: number;
  @Output() resetCounter = new EventEmitter<void>();

  reset(): void {
    this.resetCounter.emit();
  }

}
