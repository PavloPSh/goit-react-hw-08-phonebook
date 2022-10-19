

export const ContactList = ({ contacts, removeContact }) => {
    return (
        <ul>
            {
                contacts.map(({ name, number, id }) => 
                    <li key={id}>
                        <p>{name}: {number}</p>
                        <button type="button" onClick={() => removeContact(id)}>Delete</button>
                    </li>
                )
            }
        </ul>
    )
}