import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCoin } from "../../services/slices/dataCryptoSlice";
import search from '../../img/searchLogo.svg'

export default function Form({ web }){

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  function hanldeChange(e){
    setText(e.target.value)
  }

  function handleSubmit(e){
    // Funcionalidad
    e.preventDefault()
    
    dispatch(searchCoin(text))
  }

  return (
    <form className={`header_search ${web ? '' : 'movil'}`} onSubmit={handleSubmit}>
      <button className="header_search_btn">  
        <img 
          src={search} 
          alt="searchLogo" 
          className="header_search_input_logo" 
        />
      </button>
      <input 
        type="text"
        value={text}
        className="header_search_input"
        name="searchBar"
        id="searchBar"
        onChange={hanldeChange}
        placeholder="Search"
      />
    </form>
  )
}