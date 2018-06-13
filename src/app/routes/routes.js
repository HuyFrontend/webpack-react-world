import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
    return <div>Loading...</div>;
}

const Home = Loadable({
    loader: () => import('./../components/ReduxElements/ReduxElements'),
    loading: Loading,
});

const BookList = Loadable({
    loader: () => import('./../components/ReduxBookList/ReduxBookList'),
    loading: Loading,
});

const Contact = Loadable({
    loader: () => import('./../components/Forms/ContactForm'),
    loading: Loading
});

const AdvancedPatterns = Loadable({
    loader: () => import('./../components/AdvancedPatterns/AdvancedPatterns'),
    loading: Loading
});

const Family = Loadable({
    loader: () => import('./../components/Family/Family'),
    loading: Loading
});

const routes = [
    { path: '/', exact: true, name: 'Main', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/list', name: 'BookList', component: BookList },
    { path: '/advanced', name: 'AdvancedPatterns', component: AdvancedPatterns },
    { path: '/family', name: 'Family', component: Family }
];

export default routes;