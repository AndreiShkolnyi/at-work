import React from 'react';
import { StoreProvider } from './store-provider/store-provider';

export const Providers = ({children}) => {

    return (
        <React.StrictMode>
            <StoreProvider>{children}</StoreProvider>
        </React.StrictMode>
    )
}