import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Icon, Field, Step, Button, Box, Typography } from '@alifd/next';
import { appHistory } from '@ice/stark-app';
// import shouji from '@/components/images/icons/shouji.svg'
import iphone from '../../../../components/images/icons/shouji.svg'
// import { Item } from '@alifd/next/types/step';

import styles from './index.module.scss';

export interface DataSource {//收集表单的接口
    name?: string;
    category?: string;
}

export interface StepFormProps {
    dataSource?: DataSource;
    onSubmit?: (data: DataSource) => void;
}

const DEFAULT_DATA: DataSource = {//默认值
    name: '',
    category: '',
};


//定义一个StepForm是函数组件等于返回值为JSX.Element的函数、props符合StepFormProps接口
const StepForm: React.FunctionComponent<StepFormProps> = (props: StepFormProps): JSX.Element => {

    const [second, setSecond] = useState(5);//计数器初始化5

    const { dataSource = DEFAULT_DATA, onSubmit = (): void => { } } = props;
    const projectField = Field.useField({ values: dataSource });//表单辅组工具Field
    const [currentStep, setStep] = useState<number>(0);
    //步骤
    const steps = ['填写账号', '身份验证', '设置新密码', '完成'].map(
        (item, index) => (
            <Step.Item aria-current={index === currentStep ? "step" : false} key={index} title={item} />
        ),
        /*  (item, index): Item => (
             <Step.Item aria-current={index === currentStep ? 'step' : null} key={index} title={item} />
         ), */
    );
    //提交
    const submit = (): void => {
        console.log("触");
        const values = projectField.getValues();//表单辅组工具得到projectField
        console.log('values:', values);//应该收集前面三步的数据
        onSubmit(values as object);//类型断言、思考如果values：object
        setStep(currentStep + 1);
    };
    //下一步
    const goNext = async (): Promise<any> => {
        console.log("发");
        const { errors } = await projectField.validatePromise();//表单辅组工具得到projectField

        if (errors) {
            console.log('errors', errors);
            return;
        }
        setStep(currentStep + 1);
    };
    //上一步
    const goPrev = (): void => {
        setStep(currentStep - 1);
    };
    //初始步
    const goLogin = () => {
        appHistory.push('/login')
    };

    const byPhone = () => {
        isshow(!show)
        isshowPhone(!show)
    }
    const byEmail = () => {
        isshow(!show)
        isshowEmail(!show)
    }

    let actions: JSX.Element;
    actions = <></>;
    let mainbody: boolean | JSX.Element;
    mainbody = false;

    const [show, isshow] = useState(false);
    const [showPhone, isshowPhone] = useState(false);
    const [showEmail, isshowEmail] = useState(false);
    let pushTimer: any;//跳转定时器id
    let numTimer: any;//计时器id
    if (currentStep === 3) {
        pushTimer = setTimeout(() => appHistory.push('/login'), 5000);
        numTimer = setInterval(() => {
            console.log('进setinterval');
            setSecond(second => second > 0 ? second - 1 : second
            )
        }, 1000);
    };
    useEffect(() => {
        console.log('进入useEffect');
        return () => {
            console.log("卸载执行", pushTimer, numTimer);
            clearTimeout(pushTimer);
            clearInterval(numTimer);
        };
    }, []);//清除定时器
    switch (currentStep) {
        case 0:
            actions = (
                <Button type="primary" onClick={() => { goNext(), submit() }}>
                    下一步
                </Button>
            );
            break;
        case 1:
            mainbody = (
                <>
                    <h1>验证身份</h1>
                    <div hidden={show}>
                        <div>您正在为找回密码，为了保护账号安全，需要验证身份（以下方式三选一）</div>
                        <div className={`${styles.fle} ${styles.chooseItem}`}>
                            <div className={styles.item} onClick={byPhone}>
                                {/* <Icon style={{ fontSize: '20px' }} type="smile" /> */}
                                <img src={iphone} alt="" />
                                &nbsp;
                                <span>通过 密保手机 138********接收短信验证码</span>
                            </div>
                            <Icon type="arrow-right" />
                        </div>
                        <div className={`${styles.fle} ${styles.chooseItem}`}>
                            <div className={styles.item} onClick={byEmail}>&nbsp;
                                <Icon type="email" style={{ fontSize: '20px' }} />&nbsp;<span>通过 电子邮箱 138*****000@qq.com</span>
                            </div>
                            <Icon type="arrow-right" />
                        </div>
                    </div>

                    <Form
                        field={projectField}
                        className={styles.form}
                        responsive
                        fullWidth
                        labelAlign="top"
                        hidden={!showPhone}
                    >
                        <Form.Item colSpan={12} style={{ position: 'relative' }} label="请用 密保手机 138********接收短信验证码" required requiredMessage="必填">
                            <Button style={{ position: 'absolute', right: 0, top: 0 }}>获取验证码</Button>
                            <Input placeholder="填入手机接收的验证码" name="name" />
                        </Form.Item>

                        <Form.Item colSpan={12}>
                            <Form.Submit type="primary" onClick={submit} validate>
                                下一步
                            </Form.Submit>
                        </Form.Item>
                    </Form>
                    <div hidden={!showEmail}>
                        <div>系统已经向电子邮箱138******@qq.com发送一封验证邮件，请注意查收邮件，进行身份验证。请参考邮件的说明进行重置密码的相关操作。
                        </div>
                        <div style={{ marginTop: '16px' }}>如果没有收到验证邮件，请检查邮箱回收站或  重新发送 。</div>
                        <Button style={{ marginTop: '16px' }}>确定</Button>
                    </div>
                </>
            );
            break;
        case 2:
            mainbody = (
                <>
                    <h1>设置新密码</h1>
                    <Form
                        field={projectField}
                        className={styles.form}
                        responsive
                        fullWidth
                        labelAlign="top"
                    >
                        <Form.Item colSpan={12} label="请输入广州继教网注册的用户名/学号/身份证号/手机号" required requiredMessage="必填">
                            <Input placeholder="请输入密码" name="newPwd" />
                        </Form.Item>

                        <Form.Item colSpan={12} required>
                            <Input placeholder="请再次确认密码" name="checkPwd" />
                        </Form.Item>

                        <Form.Item colSpan={12}>
                            <Button onClick={goPrev} style={{ marginRight: '5px' }}>
                                上一步
                            </Button>
                            <Form.Submit type="primary" onClick={submit} validate>
                                下一步
                            </Form.Submit>
                        </Form.Item>
                    </Form>
                </>
            );
            break;
        case 3:
            mainbody = (
                <>
                    <Box align="center">
                        <Icon type="success-filling" size={72} className={styles.succesIcon} />
                        <Typography.H1>提交成功</Typography.H1>
                        <Typography.Text>{second}s 后自动跳转至登录页</Typography.Text>
                        <Box margin={20} direction="row">
                            <Button type="primary" style={{ marginRight: '5px' }} onClick={goLogin}>
                                返回登录页
                            </Button>
                        </Box>
                    </Box>
                </>
            );
            break;
        default:
            break;
    }

    if (!mainbody) {
        mainbody = (
            <>
                <h1>填写账号</h1>
                <Form
                    field={projectField}
                    isPreview={currentStep === 1}
                    className={styles.form}
                    responsive
                    fullWidth
                    labelAlign="top"
                >
                    <Form.Item colSpan={12} label="请输入广州继教网注册的用户名/学号/身份证号/手机号" required requiredMessage="必填">
                        <Input placeholder="用户/学号/身份证号/手机号" name="name" />
                    </Form.Item>

                    <Form.Item colSpan={12} required>
                        <Input placeholder="请输入验证码" name="category" />
                    </Form.Item>

                    <Form.Item colSpan={12}>{actions}</Form.Item>
                </Form>
            </>
        );
    }

    return (
        <div>
            <Card free>
                <Card.Content className={styles.StepForm}>
                    <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>找回密码</h1>
                    <Step current={currentStep} shape="circle">
                        {steps}
                    </Step>
                    {mainbody}
                </Card.Content>
            </Card>
        </div>
    );
};

export default StepForm;
