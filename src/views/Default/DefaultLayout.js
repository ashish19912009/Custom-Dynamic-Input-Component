import React,{Component} from 'react';
import Input from '../../container/UI/input';
import styles from '../../container/UI/input.module.css';

class Defaultlayout extends Component{

    state = {
        userForm: {
            name:{
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'User Name'
                },
                value:''
            },
            email:{
                elementType: 'input',
                elementConfig:{
                    type: 'email',
                    placeholder: 'Email'
                },
                value:''
            },
            password:{
                elementType: 'input',
                elementConfig:{
                    type: 'password',
                    placeholder: 'Password'
                },
                value:''
            },
            userType:{
                elementType: 'select',
                elementConfig:{
                    options: [
                        {value: 'admin', displayValue: 'Admin'},
                        {value: 'Employee',displayValue:'Employee'}
                    ]
                }
            }
        }
    }
    inputChangedHandler = (event,elementIdentifier) => {
        // console.log(event.target.value);
         const tempForm = {...this.state.userForm};
         const formElement = {...tempForm[elementIdentifier]};
         formElement.value = event.target.value;
         tempForm[elementIdentifier] = formElement;
         this.setState({userForm: tempForm});
    }
    render() {
        const formArray = [];
        for(let key in this.state.userForm)
        {
          formArray.push({
              id: key,
              config: this.state.userForm[key]
          });
        }
        return(<>
            <div className={styles.InputDiv} style={{marginTop:'150px'}}>
                <h1>Custom Dynamic Input Component</h1>
                <form>
                <h3>Custom Form</h3>
                    {
                        formArray.map((el,i) => {
                            return <Input key={i} elementType={el.config.elementType} 
                                    elementConfig={el.config.elementConfig}
                                    changed={(event) => this.inputChangedHandler(event,el.id)}
                                    value={el.config.value} />
                        })
                    }
                    <button className={styles.InputButton}>Submit</button>
                </form>                   
            </div>
        </>);
    }
}

export default Defaultlayout;