import React, {useState} from 'react'
import './style/form.css'

const Form = ({usersNames}) => {
    const [inputName, setInputName] = useState('')

    const handleSearchChange =(e)=>{
        setInputName(e.target.value);
    }

    let searchedName = [];

    searchedName = usersNames.map(userName => {
     const nameNumber =  userName.toUpperCase().search(inputName.toUpperCase())

     if(nameNumber === 0){
         return (<li className='form__list-item'>{userName}</li>)
     }
     return null
     
    })

    return (
        <div className='form' autoComplete="off">
            <form>
                <input className="form__input" onChange={handleSearchChange} />
                <button className="form__btn">submit</button>
                <ul className="form__list">
                    {inputName.length!==0&& searchedName}
                </ul>
                
                 
            </form>
        </div>
    )
}

export default Form
