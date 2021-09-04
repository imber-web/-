import React from 'react'
import { Form, Input, Checkbox, Button } from '@alifd/next';
import { appHistory } from '@ice/stark-app';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

export default class Register extends React.Component {
    userExists(rule, value) {
        return new Promise((resolve, reject) => {
            if (!value) {
                resolve(value);
            } else {
                setTimeout(() => {
                    if (value === 'frank') {
                        reject([new Error('Sorry, this username is already exist.')]);
                    } else {
                        resolve(value);
                    }
                }, 500);
            }
        });
    }
    backLogin = () => {
        appHistory.push('/login')
    }

    render() {
        return (
            <div style={{ width: "650px", margin: '0 auto', padding: '40px 0' }}>
                <Form {...formItemLayout}>
                    <h1 style={{ textAlign: 'center' }}>注册账号</h1>
                    <FormItem
                        label="姓名:"
                        required
                        hasFeedback
                        validator={this.userExists.bind(this)}
                        requiredMessage="Please enter name"
                        help=""
                    >
                        <Input name="valUsername" />
                        <Form.Error name="valUsername" >{
                            (errors, state) => {
                                if (state === 'loading') {
                                    return 'loading...';
                                } else {
                                    return errors;
                                }
                            }
                        }</Form.Error>
                    </FormItem>
                    <FormItem
                        label="登录账号:"
                        hasFeedback
                        required
                        format="email"
                        requiredMessage="Please enter account"
                    >
                        <Input placeholder="由字母、数字或“_”组成，长度6-30位" name="valEmail" />
                    </FormItem>

                    <FormItem
                        label="设置密码:"
                        hasFeedback
                        required
                        requiredMessage="Please enter password"
                    >
                        <Input htmlType="password" name="valPasswd" />
                    </FormItem>

                    <FormItem
                        label="确认密码:"
                        hasFeedback
                        required
                        requiredMessage="Please enter password"
                    >
                        <Input placeholder="请再次输入密码" htmlType="password" name="checkPasswd" />
                    </FormItem>

                    <FormItem
                        label="证件类型:"
                        hasFeedback
                        required
                        requiredMessage="Please choose identity card"
                    >
                        <Input htmlType="password" name="identity" />
                    </FormItem>

                    <FormItem
                        label="证件号码:"
                        hasFeedback
                        required
                        requiredMessage="Please enter ID card"
                    >
                        <Input name="idCard" />
                    </FormItem>

                    <FormItem
                        label="手机号码:"
                        hasFeedback
                        required
                        requiredMessage="Please enter phone number"
                    >
                        <Input name="phoneNum" />
                    </FormItem>

                    <FormItem
                        label="验证码:"
                        hasFeedback
                        required
                        requiredMessage="Please enter checkCode"
                    >
                        <Input placeholder='请输入手机收到的6位短信验证码' name="checkCode" />
                    </FormItem>

                    <FormItem
                        label="电子邮箱:"
                        hasFeedback
                        required
                        requiredMessage="Please enter email"
                    >
                        <Input name="email" placeholder="用于找回密码" />
                    </FormItem>

                    <FormItem
                        label="任职单位:"
                        hasFeedback
                        required
                        requiredMessage="Please enter unit"
                    >
                        <Input name="unit" placeholder="请输入关键字，支持模糊搜索" />
                    </FormItem>

                    <FormItem label=" " colon={false}>
                        <Checkbox name="agreement" defaultChecked>
                            我已阅读同意
                            <a href="#">《广州市中小学教师继续教育网注册协议》</a>
                        </Checkbox>
                    </FormItem>

                    <FormItem wrapperCol={{ offset: 6 }} >
                        <Form.Submit validate type="primary" onClick={(v, e) => console.log(v, e)} style={{ marginRight: 10 }}>立即注册</Form.Submit>
                        <Form.Reset style={{ marginRight: 10 }}>重置</Form.Reset>
                        <Button onClick={this.backLogin}>返回登录页</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

