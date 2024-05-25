import { provideStore } from '@ngrx/store';
import { rootReducer } from '../reducers/reducers';

export const myStore = provideStore(rootReducer);