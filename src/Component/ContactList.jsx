import ContactItem from "./ContactItem";

function ContactList({ contacts,deletHandeler }) {
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem data={contact} key={contact.id} deletHandeler={deletHandeler} />
          ))}
        </ul>
      ) : (
        <p>No Contact Yet!</p>
      )}
    </div>
  );
}

export default ContactList;
