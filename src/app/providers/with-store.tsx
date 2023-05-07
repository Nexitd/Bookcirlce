import { ReactNode } from "react";
import { Provider } from 'react-redux';
import { store } from '../store';

// добавляем стор редакса, где хранятся наши данные моканые

export const withStore = (component: () => ReactNode) => () =>
    <Provider store={store}>{component()}</Provider>;