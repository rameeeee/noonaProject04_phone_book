import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ContactListItem = ({item, handleDelete}) => {
    return (
        <div className='item_wrap'>            
             <div className="img_wrap">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg" alt="person image" />
            </div>
            <div className="item_info_wrap">
                <div className="name_info">{item.name}</div>
                <div className="number_info">{item.phoneNumber}</div>
            </div>
            <button type='button' className='delete_btn' onClick={() => {handleDelete(item.id)}}>
                삭제 <FontAwesomeIcon icon={faXmark} className="ico_delete"/>
            </button>
        </div>
    )
}

export default ContactListItem
