// import './bootstrap';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import "simplebar-react/dist/simplebar.min.css";
import "@css/app.scss";
import "../css/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import {Provider} from "react-redux";
// @ts-ignore
import store from "@/store";

createInertiaApp({

    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        /*createRoot(el).render(
            <App {...props} />
        )*/

        createRoot(el).render(
            <Provider store={store}>
                <App {...props}/>
            </Provider>
        )
    },
    progress: {
        showSpinner: true
    }
});

