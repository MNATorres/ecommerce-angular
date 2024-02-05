import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    // NO ASYNC
    // before render
    // solo corre una vez
    console.log('contructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.duration);
  }

  ngAfterViewInit() {
    //after render
    // hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // el componente se destruye
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('change duration');
  }
}
