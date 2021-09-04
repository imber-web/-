import { Shell } from '@alifd/next';
import PageNav from './components/PageNav';
import './index.scss'
import Right from '@/layouts/BasicLayout/components/Right';

declare global {
    interface Window {
        webpackJsonp: any[];
    }
}

export default function BasicLayout(props: {
    children: React.ReactNode;
    pathname: string;
}) {
    const { children, pathname } = props;
    return (
        <Shell
            type="brand"
            style={{
                minHeight: '100vh',
                minWidth: '1080px',
            }}
            className="shell"
        >
            <Shell.Branding>
                <div id="title">
                    {/* <div>广州市中小学教师继续教育网</div> */}
                    <div>综合管理平台</div>
                </div>
                <Shell.Navigation className="shellNav">
                    <PageNav pathname={pathname} />
                </Shell.Navigation>
                <Right />

            </Shell.Branding>
            <Shell.Content>{children}</Shell.Content>
        </Shell>
    );
}
