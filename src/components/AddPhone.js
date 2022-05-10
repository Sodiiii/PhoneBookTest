import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { config } from '../source/config'

const AddPhone = () => {
    const [selectValue, setSelectValue] = useState('7')
    const [title, setTitle] = useState('');

    function selectVal(e) {
        setSelectValue(e.target.value);
    }

    function phoneValidate(e) {
        const val = e.target.value.replace(/\D/g,'').substr(0,10);
        setTitle(val);
    }
    const handleSubmit = async (e) => {
        const phone = `+${selectValue} ${title}`
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "phones"), {
                phone,
                complited: false,
            });
            setTitle("");
        }
    };

    const flag = () => {
        let flag;
        config.map(x => {
            if (selectValue == x.code) {
                flag = x.flag;
            }
        })
        return flag;
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <div className='input_container'>
            <select className={`phone_select ${flag()}`} value = {selectValue} onChange = {selectVal} >
                {
                    config.map(area => {
                        return <option key={area.country} value={area.code}> +{area.code} </option>
                    })
                }
            </select>
            <input
                type="tel"
                placeholder=''
                value={title}
                onChange={phoneValidate}
                minLength="3"
                maxLength="10"
                required
            />
        </div>
        <div className='btn_container'>
            <button>Add number</button>
        </div>
    </form>
  )
}

export default AddPhone