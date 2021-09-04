//左侧导航栏
import { Nav } from '@alifd/next';
const { Item, SubNav } = Nav;
const GlovalNav = () => {
    return (
        <Nav
            className="basic-nav"
            mode="inline"
            direction="ver"
            type="primary"
            defaultSelectedKeys={["home"]}
            triggerType="click"
        >
            <Item key="home">行政区划</Item>
            <SubNav label="学校管理" >
                <Item>学校管理</Item>
                <Item>学校管理员管理</Item>
            </SubNav>
            <SubNav label="校外培训机构管理" >
                <Item key="next-design">校外培训机构管理</Item>
                <Item key="next-doc">校外培训机构管理员管理</Item>
            </SubNav>
            <SubNav label="单位管理" >
                <Item key="next-design">单位管理</Item>
                <Item key="next-doc">单位管理员管理</Item>
            </SubNav>
            <SubNav label="教师管理" >
                <Item key="next-design">教师管理</Item>
                <Item key="next-doc">校外培训机构教师管理</Item>
                <Item key="next-doc">离职教师库</Item>
                <Item key="next-doc">教师调动管理</Item>
            </SubNav>
            <SubNav label="专家管理" >
                <Item key="next-design">专家管理</Item>
                <Item key="next-doc">专家入库审批</Item>
            </SubNav>
            <Item key="document">核心信息变更审核</Item>
        </Nav>
    )

}
export default GlovalNav;