import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from './Layouts/Layout';
// import 'bootstrap/dist/css/bootstrap.min.css';

createInertiaApp({
  title: title => title ? `${title} - Laravel Portfolio Site` : 'Laravel Portfolio Site',
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
    let page:any = pages[`./Pages/${name}.tsx`];
    page.default.layout = page.default.layout || ((page: unknown) => <Layout children={page}/>);
    return page;
  },
  setup({ el, App, props }) {
    console.log('App is setting up...');
    createRoot(el).render(<App {...props} />);
  },
});