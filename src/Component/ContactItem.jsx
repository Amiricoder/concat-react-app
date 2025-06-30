function ContactItem({data:{id,name,email,lastName,phone},deletHandeler}) {
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📬</span>
        {email}
      </p>
      <p>
        <span>📞</span>
        {phone}
      </p>
      <button onClick={()=> deletHandeler(id)}>🗑</button>
    </li>
  );
}

export default ContactItem;
