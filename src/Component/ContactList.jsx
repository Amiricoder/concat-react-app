
import ContactItem from "./ContactItem";
function ContactList({ contacts ,deletHandeler}) {
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact} deletHandeler={deletHandeler}/>
          ))}
        </ul>
      ) : (
        <p>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactList;
