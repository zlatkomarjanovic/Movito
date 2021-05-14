import React from 'react'

const Search = (props) => {
    return (
        <div className = "searchdiv">
        {/* <form 
            onSubmit = {props.handleonSubmit}
            className = "searchf"> */}
             <input 
             className = "search" 
             type = "search" 
             placeholder = "Search..." 
             value = {props.searchTerm}
             onChange = {props.handleOnChange}
             /> 
        




      </div>



    )
}

export default Search


