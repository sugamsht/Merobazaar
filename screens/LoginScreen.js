import React, { useState, useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';


import Screen from '../components/Screen';
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';


let validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().required().min(4).label("Password"),
});

function LoginScreen(props) {
    const { logIn } = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        logIn(result.data);
    }

    return (
        <Screen style={styles.container}  >
            <Image style={styles.logo} source={require('../assets/logo/1.png')} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
                <AppFormField
                    name="email"
                    placeholder="email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    placeholder="password"
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="emailAddress"
                />
                <SubmitButton title="Log In" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        alignSelf: 'center',
        marginTop: 70,
    }
})

export default LoginScreen;