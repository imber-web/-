import { MenuButton, Icon } from '@alifd/next';
import { appHistory } from '@ice/stark-app';
import './index.scss'
const { Item } = MenuButton;
const menu = ["学员个人中心", "辅导教师工作台", "专家工作台", "提升工程2.0后台", "研修社区后台"].map(item => (
    <Item key={item}>{item}</Item>
));
const handleChange = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    appHistory.push('/login')
}
const menuManageer = ["退出"].map(item => (
    <Item onClick={handleChange} key={item}>{item}</Item>
));


const Right = () => {
    return (
        <div className="nav-wrap">
            <div className="nav-right">
                <MenuButton className="rightBtn" size="large" label="综合管理平台">{menu}</MenuButton>
                <Icon type="email" />
                <Icon type="atm" />
                <span className="managerWrap">
                    <Icon type="account" />
                    <MenuButton className="rightBtn" size="large" label="管理员">{menuManageer}</MenuButton>
                </span>
            </div>
        </div>
    )
};

export default Right;
