import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './layouts';
import { Home } from './pages';

export const Router = (): JSX.Element => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route
                path="/"
                element={
                    <App />
                }
            >
                <Route
                    index
                    element={
                        <Home />
                    }
                />
            </Route>

        </Routes>
    </BrowserRouter>
);