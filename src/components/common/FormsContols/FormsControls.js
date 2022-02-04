import React from "react";
import styles from './FormsControls.module.css'
import { number } from '../../ContactForm/Contact.jsx'

export const FormControl = ({meta:{touched,error}, children}) =>{
    const hasError = touched && error
    return (
        // <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            // <div>
            <>
                {children}
            </>
            //  {/* </div> */}
        //     { hasError && <span>{error}</span>}
        // </div>
    )
}

export const Input = (props) =>{
    console.log(props)
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        
        <input {...input} {...restProps}/>
    </FormControl>
}
