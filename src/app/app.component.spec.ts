import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule} from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [AppComponent],
    imports: [RouterTestingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });

  beforeEach(() => spectator = createComponent());

  it('should create the app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();
  });

});
