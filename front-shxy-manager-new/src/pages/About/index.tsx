import { Link } from 'ice';
// import WrapperPage from '@/components/LoginWrapper';
// import Test from './Test'

const About = () => {
    return (
        <div>
            <h1>About page</h1>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/seller/list">sellerlist</Link></div>
            {/* <WrapperPage authCode="p.platform.system.menu.update"> */}
                {/* <Test /> */}
            {/* </WrapperPage> */}
        </div>
    );
};

export default About;
