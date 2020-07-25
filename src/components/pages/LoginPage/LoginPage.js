import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from "../../../redux/actions/auth"

const LoginPage = () => {
    const dispatch = useDispatch();

    return (
        <div data-test="LoginPage">
            <button data-test="LoginButton" onClick={() => dispatch(startLogin())}>Login</button>
        </div>
    )
}

export default LoginPage;