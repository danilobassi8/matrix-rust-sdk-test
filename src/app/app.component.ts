import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatrixService } from './service/matrix.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'matrixtest';

  matrix = inject(MatrixService);

  ngOnInit() {
    const client = this.matrix.initClient();

    console.log({ client });
  }
}
