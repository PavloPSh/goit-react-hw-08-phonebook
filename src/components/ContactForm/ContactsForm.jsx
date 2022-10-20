
import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import { Form, FormItem } from "./ContactForm.styled";


export class ContactForm extends Component {

    state = {
        name: '',
        number: '',

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        
        this.props.onAddContact({name,number})
        this.setState({
            name: '',
            number:'',
        })
    }

    render() {
        const { name, number } = this.state;
        const nameId = nanoid();
        const numberId = nanoid();

        return (

            <Form onSubmit={this.handleSubmit}>
                <FormItem htmlFor={nameId}> Name:
                    <input
                        id={nameId}
                        type="text"
                        name='name'
                        onChange={this.handleChange}
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                </FormItem>  
                <FormItem htmlFor={numberId}> Number:
                    <input
                        id={numberId}
                        type="tel"
                        name="number"
                        onChange={this.handleChange}
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required/>
                </FormItem>   
                    
                <button type="submit">Add contact</button>

                
            </Form>
        )
    }
}


ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
}