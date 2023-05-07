import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'app/store';

// данные хуки имеют тип из app, они позволяют на этапе разработки знать, какие данные 
// находятся в том или ином слайсеы

// хук для диспетчера с типизацией
export const useAppDispatch: () => AppDispatch = useDispatch;
// хуук для стейта с типизацией 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;