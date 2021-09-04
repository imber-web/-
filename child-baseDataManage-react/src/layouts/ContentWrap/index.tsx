//内容---面包屑
import { Breadcrumb } from '@alifd/next';
import { Link } from 'react-router-dom';
const GlovalNav = () => {
    let bread: string[] = location.pathname.includes('/baseDataManage') ? location.pathname.split('/baseDataManage')[1].split('/') : ['/'];
    bread[0] === '' ? bread = ['/'] : bread;
    console.log(bread);
    return (
        <Breadcrumb separator="/">
            <Breadcrumb.Item>
                {
                    bread.map((ite, idx) => {
                        return (
                            <Link to={`/${ite}`} key={idx}>{ite}</Link>
                        )
                    })
                }
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default GlovalNav;