import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";
function ContactList({ contacts, deletHandeler }) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              data={contact}
              key={contact.id}
              deletHandeler={deletHandeler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact Yet!</p>
      )}
    </div>
  );
}

export default ContactList;
