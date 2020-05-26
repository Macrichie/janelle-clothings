import React from 'react'

import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class Signin extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: '' 
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email:'',
                password: ''
            })
        } catch(error) {
            console.error(error)
        }
    }

    handleChange = e => {
        const {name, value} = e.target

        this.setState({[name]: value})
    }
    
    render() {
        return (
            <div className="sign-in">
                <h2>I already Have an account</h2>
                <span>Sign in with email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required
                        label="email"
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        required
                        label="password"
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                            Signin with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
