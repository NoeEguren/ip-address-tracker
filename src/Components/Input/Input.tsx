import { useContext, useEffect, useState } from "react"
import IPContext from "../../Context/IPContext";
import './Input.css';

function Input() {
    const { IP, setIP , searchIP} = useContext(IPContext);

    return (
        <div className="input-container">
        <input className='search-input' type="text" placeholder="Search for any IP address or domain" value={IP} onChange={e => setIP(e.target.value)}/>
        <button className="btn" onClick={searchIP}>
            <img src="/src/assets/icon-arrow.svg" alt="" />
        </button>
        </div>
    )
}

export default Input
