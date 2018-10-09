<template>
    <Form ref="formInline"  :model="formInline" :rules="ruleInline" >
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="身份账号">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
    data() {
        return {
            formInline: {
                user: '',
                password: ''
            },
            userMsg: {
                user: 'hzb',
                password: '8825'
            },
            ruleInline: {
                user: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        type: 'string',
                        min: 4,
                        message: '请输入至少4位密码',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    if (this.isSuccess) {
                        this.$Message.success('欢迎来到渔人码头！');
                        this.$store.commit('LOGINVIEW',false);
                        this.$store.commit('LOGING',true);
                    } else {
                        this.$Message.error('您的身份是假的')
                    }
                } else {
                    this.$Message.error('账号密码输对了吗？');
                }
            });
        }
    },
    computed: {
        isSuccess() {
            return this.userMsg.user === this.formInline.user && this.userMsg.password === this.formInline.password;
        }
    }
};
</script>