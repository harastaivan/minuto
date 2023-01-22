import React from 'react';
import ReactDOM from 'react-dom/client';
import { Application } from 'modules/application';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>,
);
