"use client"
import { store } from '@/app/lip/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
// import { LoadingScreen } from '~/common/components/templates';

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}
