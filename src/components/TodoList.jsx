// import React, { useState } from "react";
// import Modal from "./Modal";
// import styled from'styled-components'
// const TodoList = (props) => {
//     const [value, setValue] = useState('')
//   const [modal,setModal] = useState(false)
//     const valueHandler = (event) => {
//         setValue(event.target.value)
//     }; 
// const closeHandler = () => {
//     setModal(false)
// }
//     const submitHandler = (e) => {
//         e.preventDefault();
//         const list = {
//             value: value,
//             id: Math.random().toString(),
//         };
//         if(value === '') {
//             setModal(true)
//         }
//         if(value.trim() != '' ) {
//             props.onAddTodo(list)
    
//         }
//         setValue('')
       
//     };
//     return (
//         <div>
//             {modal && <Modal onClose={closeHandler} />}
//             <form onSubmit={submitHandler}>
//                 <Input type="text" value={value} onChange={valueHandler} />
//                 <Button >Todo Add</Button>
                
//             </form>
//         </div>
//     )
// }
// export default TodoList 
// const Input=styled.input`
//     border-radius:4px;
//     background-color:#FCBACB;
//     color:#E11584 ;
//     margin-left:300px
// `
// const Button=styled.button`
//     margin-left:30px;
//     border-radius:4px;
//     background-color:#FCBACB;
//     color:#E11584;
//     margin-top:300px;
   
    
// `