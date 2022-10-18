import { Component } from "react";
import { nanoid } from "nanoid";

export class FormPhonebook extends Component {

    state = {
        name: '',
    }

    handleChange = e => {
        this.setState({name: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name } = this.state;
        this.props.onSubmit({name})
        this.setState({
            name: '',
        })
    }

    render() {
        const { name } = this.state;
        const nameId = nanoid();

        return (

            <form onSubmit={this.handleSubmit}>
                <label htmlFor={nameId}> Name
                    <input
                        id={nameId}
                        type="text"
                        name='name'
                        onChange={this.handleChange}
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                    
                    <button type="submit">Add contact</button>

                </label>
            </form>
        )
    }
}