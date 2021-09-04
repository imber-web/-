import { ResponsiveGrid } from '@alifd/next';
import LoginBlock from './components/LoginBlock';
import Footer from '@/layouts/BasicLayout/components/Footer';
const { Cell } = ResponsiveGrid;

const Login = () => {
    return (
        <ResponsiveGrid gap={20}>
            <Cell colSpan={12}>
                <LoginBlock />
                <Footer/>
            </Cell>
        </ResponsiveGrid>
    );
};

export default Login;
