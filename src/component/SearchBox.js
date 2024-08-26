import React, {useState} from 'react'
import { useDispatch } from 'react-redux';


const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type: "SEARCH_BY_NAME", payload: {inputValue}})
    }

    return (
        <div className="searchbox_wrap">
            <div className="searchinput_wrap">
                <input placeholder="이름을 검색해주세요." type="text" className="search_input" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </div>
            <button type="button" className="search_btn" onClick={handleClick}>검색</button>
        </div>
    )
}

export default SearchBox
