import React from 'react'

//This is our live search component. We are calling it in our section 
// I started out by building it like an onsubmit search, later on I put the same logic 
// in an onChange function and got a live search since it changes the results every time 
//there is a change in searchbox. 
//This component takes multiple props 
// searchdiv is a class for styling 
// input however takes value and onchange props that we wrote in our biggest components.

const Search = (props) => {
    return (
        <div className = "searchdiv">
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


