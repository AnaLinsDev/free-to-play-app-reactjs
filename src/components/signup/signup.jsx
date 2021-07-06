import React from 'react';
import './signup.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            'displayName': '',
            'email': '',
            'password': '',
            'confirmPassword': ''
        }
    }

    handleSubmit = async event => {
        // Quando o usuário apertar em "SIGN UP", as consts pegarão o valor de state e crirão pelo firebase
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          // Cria o user com email e senha
          const { user } = await auth.createUserWithEmailAndPassword(
            email, password
          );

          // Cria o documento do user no database
          await createUserProfileDocument(user, { displayName });
    
          // Limpa o form
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };

    handleChange = event => {
       // Toda vez que o input for alterado, o state receberá o valor
        const { name, value} = event.target

        this.setState({[name]: value})

    }


    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                
                <form className='form' onSubmit={this.handleSubmit}>
                <div className='celula'>
                        <label className='label'>Name: </label>
                        <input 
                        className='input'
                        name='displayName' 
                        type='text' 
                        onChange={this.handleChange} 
                        required/>
                    </div>
                    <div className='celula'>
                        <label className='label'>Email: </label>
                        <input 
                        className='input'
                        name='email' 
                        type='email' 
                        onChange={this.handleChange} 
                        required/>
                    </div>
                    <div className='celula'>
                        <label className='label'>Password: </label>  
                        <input
                        className='input'
                        name='password' 
                        type='password' 
                        onChange={this.handleChange}
                        required/>
                    </div>
                    <div className='celula'>
                        <label className='label'>Confirm Password: </label>
                        <input 
                        className='input'
                        name='confirmPassword' 
                        type='password' 
                        onChange={this.handleChange} 
                        required/>
                    </div>
                    <div className='buttons'>
                        <button className='custom-button' type='submit'>SIGN UP </button>
                    </div> 
                </form>
            </div>
        )
    }
}


export default SignUp;