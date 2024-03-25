import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export class AppStateModel {}

const initialAppState = {};

@State<AppStateModel>({
  name: 'app',
  defaults: initialAppState,
})
@Injectable()
export class AppState {}
