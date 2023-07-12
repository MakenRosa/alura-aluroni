import Header from 'components/Header';
import stylesTheme from 'styles/Theme.module.scss';
import { Outlet } from 'react-router-dom';

export default function BasePage() {
    return(
        <>
            <Header />
            <div className={stylesTheme.container}>
                <Outlet />
            </div>
        </>
    );
}