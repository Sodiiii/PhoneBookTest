import React from 'react'

const PhoneBase = ({phone, toggleComplete}) => {
    const [newPhone, setNewPhone] = React.useState(phone.title);

    const handleChange = (e) => {
        e.preventDefault();
        if (phone.complete === true) {
            setNewPhone(phone.phone);
        } else {
            phone.phone = "";
            setNewPhone(e.target.value);
        }
    }

  return (
    <div className='phone'>
        <input
            type='tel'
            value={phone.phone === "" ? newPhone : phone.phone}
            className="list"
            onChange={handleChange}
            readOnly
        />
    </div>
  )
}

export default PhoneBase