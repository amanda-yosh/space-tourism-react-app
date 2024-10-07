import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import Crew from '@/pages/Crew'
import Technology from '@/pages/Technology'
import Destination from '@/pages/Destination'

function NotFoundPage() {
    return <h1>404 - Page Not Found</h1>;
}

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'destination/:destination',
                element: <Destination />
            },
            {
                path: 'crew/:id',
                element: <Crew />
            },
            {
                path: 'technology/:id',
                element: <Technology />
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);
