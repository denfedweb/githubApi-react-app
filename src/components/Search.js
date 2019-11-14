import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";

const Search = () => {
    const [value, setValue] = useState("");
    const {show} = useContext(AlertContext);
    const onSubmit = (e) => {
        if(e.key !== 'Enter'){
            return
        }
        if(value.trim()){
            console.log("make request: ", value)
        }else{
            show("Enter username");
        }
    };

    return (
        <div className="form-group">
            <input
            type="text"
            className="form-control"
            placeholder="Enter username..."
            onKeyPress={onSubmit}
            value={value}
            onChange={e => setValue(e.target.value)}
            />
        </div>
    );
};

export default Search;
