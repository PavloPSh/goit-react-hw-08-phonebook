

export const ContactItem = ({ contacts, onClick }) => {
    const { id, name, number } = contacts;
    return (
        <li key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onClick(id)}>Delete</button>
        </li>
    )}