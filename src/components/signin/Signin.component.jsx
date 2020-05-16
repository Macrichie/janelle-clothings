import React from 'react'
import FormInput from '../form-input/FormInput.component'

import './sign-in.styles.scss'
import CustomButton from '../custom-button/CustomButton.component'

class Signin extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: '' 
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            email:'',
            password: ''
        })
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
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signin
