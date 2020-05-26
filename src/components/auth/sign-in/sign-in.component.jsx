import React from 'react';

import FormInput from '../../../components/form-input/form-input.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.PreventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name] : value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2> I already have an account:</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='password'
                        required
                    />
                </form>
                <button type='submit'>Sign In</button>
            </div>
            
        );
    }

}

export default SignIn;