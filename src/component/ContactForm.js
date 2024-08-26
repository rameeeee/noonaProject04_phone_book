import React, {useState} from 'react'
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const dispatch = useDispatch()

    const addContactItem = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_CONTACT_ITEM", payload: {name, phoneNumber}})
        setName('')
        setPhoneNumber('')
    }

    return (
        <form className="form_wrap" onSubmit={addContactItem}>
            <div className="info_wrap">
                <div className="img_wrap">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg" alt="person image" />
                </div>
                <div className="detail_wrap">
                    <div className="input_box_wrap">
                        <label className="form_label" htmlFor="formName">이름</label>
                        <div className="input_wrap">
                            <input placeholder="이름을 입력해주세요." type="text" id="formName" className="form_input" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="input_box_wrap">
                        <label className="form_label" htmlFor="formContact">전화번호</label>
                        <div className="input_wrap">
                            <input placeholder="전화번호를 입력해주세요." type="number" id="formContact" className="form_input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div> 
            <button type="submit" className="form_btn">추가</button>
        </form>
    )
}

export default ContactForm;
