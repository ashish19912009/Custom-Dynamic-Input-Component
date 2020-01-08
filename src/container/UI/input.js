import React from 'react';
import styles from './input.module.css';

const Input = (props) =>{
    let inputElement =null;

    switch(props.elementType){
        case ('Input'):
            inputElement = <input className={styles.InputElement} 
                            onChange={props.changed}
                            {...props.elementConfig} 
                            value={props.value}/>;
            break;
        case ('Textarea'):
            inputElement = <textarea className={styles.InputElement} 
                            {...props.elementConfig} 
                            onChange={props.changed}
                            value={props.value}/>;
            break;
        case ('select'):
            const temp = {...props.elementConfig};
            inputElement = <select className={styles.InputElement}
                            onChange={props.changed}
                            >
                                {temp.options.map((el,i) =>{
                                    return <option key={i} value={el.value}> {el.displayValue}</option>
                                })}
                            </select>
            break;
        default: inputElement = <input className={styles.InputElement} 
                                {...props.elementConfig} 
                                onChange={props.changed}
                                value={props.value}/>;

    }

    return(<div>
            <label className={styles.Labels}>{props.label}</label>
            {inputElement}
    </div>);
}

export default Input;