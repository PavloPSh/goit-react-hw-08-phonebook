import { useState } from "react";
// import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import { Form, FormItem } from "./ContactForm.styled";



export const ContactForm = ({ onAddContact }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.target;

        switch (name) {
            case 'name':
                return setName(value);
            case 'number':
                return setNumber(value);
            default:
                return;
        };
    }

    const handleSubmit = e => {
        e.preventDefault();

        onAddContact({ name, number });

        setName('');
        setNumber('');

    }

    const nameId = nanoid();
    const numberId = nanoid();

    return (
        <Form onSubmit={handleSubmit}>
            <FormItem htmlFor={nameId}> Name:
                <input
                    id={nameId}
                    type="text"
                    name='name'
                    onChange={handleChange}
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
                    onChange={handleChange}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required />
            </FormItem>
                    
            <button type="submit">Add contact</button>

                
        </Form>
    )
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
}