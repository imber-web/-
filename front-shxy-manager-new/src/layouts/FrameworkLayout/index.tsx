import { useEffect } from 'react';
import BasicLayout from '../BasicLayout';
import UserLayout from '../UserLayout';

export default function FrameworkLayout(props: {
    children: React.ReactNode;
    pathname: string;
    appLeave: { path: string };
    appEnter: { path: string };
}) {
    const { pathname, children, appEnter } = props;
    const Layout = pathname === '/login'||pathname === '/forgotpassword'||pathname === '/register'||pathname === '/instruction' ? UserLayout : BasicLayout;//根据路径选择不同layout
    useEffect(() => {
        console.log('== app enter ==', appEnter);
    }, [appEnter]);

    return (
        <Layout pathname={pathname}>{children}</Layout>
    );
}
