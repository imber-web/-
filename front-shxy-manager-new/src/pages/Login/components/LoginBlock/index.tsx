import { useState } from 'react';
import { Input, Message, Form, Divider, Checkbox, Icon, Select } from '@alifd/next';
import { appHistory } from '@ice/stark';
import loginService from '@/pages/Login/services/login';//账号密码登录
import authService from '@/pages/Login/services/auth';//用户权限
import { useInterval } from './utils';
import styles from './index.module.scss';

const { Item } = Form;

export interface IDataSource {//导出接口
    name: string;
    password: string;
    autoLogin: boolean;
    phone: string;
    code: string;
}

const DEFAULT_DATA: IDataSource = {//默认值
    name: '',
    // eslint-disable-next-line
    password: '',
    autoLogin: true,
    phone: '',
    code: '',
};

interface LoginProps {//接口
    // eslint-disable-next-line react/require-default-props
    dataSource?: IDataSource;
}

const LoginBlock: React.FunctionComponent<LoginProps> = (props: LoginProps): JSX.Element => {//参数为props的箭头函数
    const {
        dataSource = DEFAULT_DATA,
    } = props;

    const [postData, setValue] = useState(dataSource);
    const [isRunning, checkRunning] = useState(false);
    const [isPhone, checkPhone] = useState(false);
    const [second, setSecond] = useState(59);

    useInterval(() => {//定时器，发送短信60s
        setSecond(second - 1);
        if (second <= 0) {
            checkRunning(false);
            setSecond(59);
        }
    }, isRunning ? 1000 : null);

    const formChange = (values: IDataSource) => {
        setValue(values);
    };

    const sendCode = (values: IDataSource, errors: []) => {
        if (errors) {
            return;
        }
        // get values.phone
        checkRunning(true);
    };
    //选择角色
    const Option = Select.Option;

    const onChange = function (value) {
        console.log(value);
    };

    const onFocus = () => {
        console.log("focus");
    };

    const onBlur = () => {
        console.log("blur");
    };
    //提交登录
    const handleSubmit = (values: IDataSource, errors: []) => {
        console.log(values);
        if (errors) {
            console.log('errors', errors);
            return;
        }
        localStorage.removeItem('ACCESS_TOKEN');
        loginService.userLogin(values.name, values.password)
            .then(response => {
                const { flag, msg } = response;//应与后端约定
                if (flag === 'success') {
                    Message.success(msg)
                    localStorage.setItem('ACCESS_TOKEN', response.access_token);
                    appHistory.push('/');
                    // authService.getUserInfo().then((data: any) => {
                    //     const obj = {
                    //         username: data.username,
                    //         phone: data.phone,
                    //         email: data.email,
                    //         truename: data.truename
                    //     }
                    //     localStorage.setItem('saas_user_info', JSON.stringify(obj));
                    //     history.push('/');
                    //     window.location.reload();
                    // });
                };
            }).catch(function (error) {//被全局错误拦截
                const { data: { data: { msg } } } = error.response;
                Message.error(msg);
            });
    };
    //手机号登录
    const phoneForm = (
        <>
            <Item format="tel" required requiredMessage="必填" asterisk={false} >
                <Input
                    name="phone"
                    innerBefore={<span className={styles.innerBeforeInput}>+86<span className={styles.line} /></span>}
                    maxLength={20}
                    placeholder="手机号"
                />
            </Item>
            <Item required requiredMessage="必填">
                <Input
                    name="phoneCode"
                    innerAfter={(
                        <span className={styles.innerAfterInput}>
                            <span className={styles.line} />
                            <Form.Submit
                                text
                                type="primary"
                                style={{ width: 64 }}
                                disabled={!!isRunning}
                                validate={['phone']}
                                onClick={sendCode}
                                className={styles.sendCode}
                            >
                                {isRunning ? `${second}秒后再试` : '获取验证码'}
                            </Form.Submit>
                        </span>
                    )}
                    maxLength={20}
                    placeholder="验证码"
                />
            </Item>
            <Item required requiredMessage="必填" style={{ marginBottom: 0 }}>
                <Select
                    name="phoneRole"
                    id="basic-demo"
                    onChange={onChange}
                    defaultValue="请选择用户类型"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    aria-label="name is"
                    style={{ width: '100%' }}
                >
                    <Option value="1">请选择用户类型</Option>
                    <Option value="2">教师</Option>
                    <Option value="3">管理员</Option>
                    <Option value="4">辅导教师</Option>
                    <Option value="5">评审专家</Option>
                </Select>
            </Item>
        </>
    );
    //账号密码登录
    const accountForm = (
        <>
            <Item required requiredMessage="必填">
                <Input
                    name="name"
                    maxLength={20}
                    placeholder="用户名"
                />
            </Item>
            <Item required requiredMessage="必填">
                <Input.Password
                    name="password"
                    htmlType="password"
                    maxLength={20}
                    placeholder="密码"
                />
            </Item>
            <Item required requiredMessage="必填">
                <Select
                    name="accountRole"
                    id="basic-demo"
                    onChange={onChange}
                    defaultValue="请选择用户类型"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    aria-label="name is"
                    style={{ width: '100%' }}
                >
                    <Option value="1">请选择用户类型</Option>
                    <Option value="2">教师</Option>
                    <Option value="3">管理员</Option>
                    <Option value="4">辅导教师</Option>
                    <Option value="5">评审专家</Option>
                </Select>
            </Item>
            <Item required requiredMessage="必填" style={{ marginBottom: 0 }}>
                <Input
                    name="accountCode"
                    placeholder="验证码"
                    maxLength={4}
                    style={{ width: '60%' }}
                />
                <img style={{ flex: 1, height: '38px', float: 'right' }} src="http://api.test.gdteacher.com/captcha/imageCode/aed974d649cc44c2b7065c5ed7ecf3d9" alt="" />
            </Item>
        </>
    );

    const byAccount = () => {
        checkPhone(false);
    };

    const byForm = () => {
        checkPhone(true);
    };

    const register = () => {
        appHistory.push('/register');
    };

    const forgotpassword = () => {
        appHistory.push('/forgotpassword');
    };

    const instruction = () => {
        appHistory.push('/instruction');
    };

    return (
        <div className={styles.LoginBlock}>
            <div className={styles.innerBlock}>
                <div>
                    {/* <img
                        className={styles.logo}
                        src="http://file.gzedu.com/upload/downloadFile.do?uploadInfoId=af9368cba2d548f198b44ac06566299d"
                        alt="logo"
                    /> */}
                    <h1 style={{ fontSize: '36px', color: 'black', fontWeight: 800 }}>广州继教网</h1>
                </div>
                <div className={styles.desc}>
                    <span onClick={byAccount} className={isPhone ? undefined : styles.active}>账户密码登录</span>
                    <Divider direction="ver" />
                    <span onClick={byForm} className={isPhone ? styles.active : undefined}>手机号登录</span>
                </div>

                <Form
                    value={postData}
                    onChange={formChange}
                    size="large"
                >
                    {/* 切换手机号登录 */}
                    {isPhone ? phoneForm : accountForm}

                    <div className={styles.infoLine}>
                        <Item style={{ marginBottom: 0 }}>
                            <Checkbox name="autoLogin" className={styles.infoLeft} >自动登录</Checkbox>
                        </Item>
                        <div style={{ display: 'flex' }}>
                            <div onClick={instruction} className={styles.link}>账号说明</div>&nbsp;
                            <div onClick={register} className={styles.link}>注册账号</div>
                        </div>
                    </div>

                    <Item style={{ marginBottom: 10 }}>
                        <Form.Submit
                            type="primary"
                            onClick={handleSubmit}
                            className={styles.submitBtn}
                            validate
                        >
                            登录
                        </Form.Submit>
                    </Item>
                    <div className={styles.infoLine}>
                        <div className={styles.infoLeft}>
                            其他登录方式 <Icon type="atm" size="small" /><Icon type="atm" size="small" /> <Icon type="atm" size="small" />
                        </div>
                        <div onClick={forgotpassword} className={styles.link}>忘记密码</div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LoginBlock;
