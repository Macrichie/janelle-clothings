import React from 'react'
import Signin from '../../components/signin/Signin.component'
import Signup from '../../components/sign-up/Signup.component'

import './sign-up-and-sign-in.styles.scss'

const SignupAndSigninPage = () => (
    <div className='sign-up-and-sign-in'>
        <Signin />
        <Signup />
    </div>
)

export default SignupAndSigninPage