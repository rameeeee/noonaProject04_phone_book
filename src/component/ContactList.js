import React, {useState, useEffect} from 'react'
import ContactListItem from './ContactListItem'
import SearchBox from './SearchBox'
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
    const dispatch = useDispatch()

    const [filterList, setFilterList] = useState([]);
    const {contactList, inputValue} = useSelector(state => state)

    useEffect(() => {
        if(inputValue !== '') {
            const list = contactList.filter(item => (item.name.includes(inputValue)))
            setFilterList(list)
        } else {
            setFilterList(contactList)
        }
    }, [inputValue, contactList])

    

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_CONTACT_ITEM', payload: { id } });
    };

    return (
        <div>
            <SearchBox />
            <p className="total">총 : {filterList.length}</p>
            {filterList.map((item, index) => (
                <ContactListItem  key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default ContactList
