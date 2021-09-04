import styles from "./index.module.scss";
import { appHistory } from '@ice/stark-app';
import loginImg from "@/components/images/login.png";

const toRegister = () => {
    appHistory.push('/register');
};
const toForgotpassword = () => {
    appHistory.push('/forgotpassword');
};

const Instruction = () => {
    return (
        <div className={styles.instruction}>
            <div className={styles.wrap}>
                <h1 className={styles.center}>广州市中小学教师继续教育网平台登录及账号说明</h1>
                <div>1. 广州市中小学教师继续教育网（简称“广州继教网”）改版后，学员个人中心与综合管理平台的登录入口已合并，不同角色的用户登录规则如下：</div>
                <div style={{ lineHeight: '30px' }}>&nbsp;&nbsp;仅为教师时：使用 账号/学号/手机号/身份证号与密码，选择 “学员个人中心” 进行登录；</div>
                <div style={{ lineHeight: '30px' }}>&nbsp;&nbsp;仅为管理员时：使用 账号/手机号/身份证号与密码，选择 “综合管理平台” 进行登录；</div>
                <div style={{ lineHeight: '30px' }}>&nbsp;&nbsp;同时为教师和管理员（已关联账号）：账号关联后，学员账号与管理员账号实现共用账号信息与基础数据，使用学员账号可登录 学员个人中心或 综合管理平台，按需选择登录平台。</div>
                <div className={styles.center}><img src={loginImg} alt="" /></div>
                <div>2. 短信登录，请使用学员账号或管理员账号中绑定的手机号码接收短信验证码；不是广州继教网的用户，无法登录。</div>
                <div>3. 二维码登录，教师请使用继教云课堂App或已绑定账号的微信扫描二维码登录学员个人中心；管理员或辅导教师请使用继教云管理App扫描二维码登录综合管理平台。</div>
                <div>4. 如新教师在广州继教网没有账号，请联系学校管理员在综合管理平台“基础数据管理-教师管理”新增教师信息，由系统自动生成账号信息<span className={styles.red}>（注：教师使用身份号码与初始密码身份证后六位登录即可）</span>；或通过“<span onClick={toRegister} className={styles.blue}>账号注册</span>”向学校管理员申请账号。</div>
                <div>5. 如新单位（培训机构、课程供应商等）在广州继教网没有账号，请通过“<span onClick={toRegister} className={styles.blue}>账号注册</span>”申请账号。</div>
                <div>6. 如教师或管理员忘记了密码，请通过“<span onClick={toForgotpassword} className={styles.blue}>忘记密码</span>”重置密码。</div>
            </div>
        </div>

    )
};

export default Instruction;