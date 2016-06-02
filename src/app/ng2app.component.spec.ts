import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2appAppComponent } from '../app/ng2app.component';

beforeEachProviders(() => [Ng2appAppComponent]);

describe('App: Ng2app', () => {
  it('should create the app',
      inject([Ng2appAppComponent], (app: Ng2appAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2app works!\'',
      inject([Ng2appAppComponent], (app: Ng2appAppComponent) => {
    expect(app.title).toEqual('ng2app works!');
  }));
});
