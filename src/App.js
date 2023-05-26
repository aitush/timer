
// import './App.css';
// import React, { useState } from 'react';
// import TodoList from './components/TodoList';
// import TodoItem from './components/TodoItem';
// function App() {
//   const [list, setList] = useState([])
//   const addTodo = (data) => {
//     setList((prevState) => {
//       return [...prevState, data]
//     });
//   }
//   const deleteListHandler=(id)=>{
//     setList(list.filter((elem) => {
//       if(elem.id !== id) {
//         return []
//       }
//     }))
//   }
//   return (

//     <div>

//       <TodoList onAddTodo={addTodo} />
//       <TodoItem onDeleteList={deleteListHandler} items={list}/>
//     </div>


//   )
// }
// export default App




// import Main from './components/Main'

// function App() {
//   return (

//     <div>
//       <Main/>
//     </div>
//   )
// }
// export default App



// Fragment, Portal, useRef




// import React, { useState, useEffect } from "react";
// import styled from 'styled-components'

// function App() {
//   const [items, setItems] = useState([])
//   const getResponce = async () => {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//     const result = await responce.json()
//     setItems(result)
//   }
//   useEffect(() => {
//     getResponce()
//   },[])
//   return (
//     <ul>
//       {
//         items.map((el) => {
//           return <Cardli>{el.name}</Cardli>
//         })
//       }
//     </ul>
//   )
// }
// export default App
// const Cardli = styled.li`
// margin-left:330px;
// text-align:center;
// list-style: none;
// height:40px;
// width:350px;
// border:1px solid black;
// border:none;
// margin-top:15px;
// border-radius:10px;
// background-color:blue;
// color: white;

// &:nth-child(even){
//   background-color:black;
//   border:none;
// }
// &:hover{
//     background-color:#b5b5b5;

//   }
// `
import React, { useState, useEffect } from "react";
import styled from 'styled-components'
function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1)
      if (seconds === 59) {
        setMinutes(minutes + 1)
        setSeconds(0);
      }
    }, 1000)
    return () => clearInterval(timer);
  })
  const start=()=>{
setSeconds(0);
setMinutes(0);
  }
  const stop=()=>{
clearInterval(timer);
  }
  return (
    <StyledDiv1>
      <StyledDiv2>
        <StyledDiv3>
          <StyledH1>
            Timer
          </StyledH1>
          <H1>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</H1>
          <StyledButton1 onClick={start}>Start</StyledButton1>
          <StyledButton2 onClick={stop}>Stop</StyledButton2>
          {/* <StyledButton3 onClick={reset}>Reset</StyledButton3> */}


        </StyledDiv3>
      </StyledDiv2>
    </StyledDiv1>
  )
}
export default App

const StyledDiv1 = styled.div`
background-color:skyblue;
width:100%;
height:100vh;

`
const StyledDiv2 = styled.div`
padding-top:10px;
margin-left:420px;

`
const StyledDiv3 = styled.div`
background-color:#fff;
width:20vw;
padding:1rem 6rem;
border-radius:1rem;
box-shadow:0 1rem 1rem -0.7rem rgb(0,0,0,0.4)
`
const StyledH1 = styled.h1`
text-align:center;
`
const H1 = styled.h1`
text-align:center;
`
const StyledButton1 = styled.button`
margin-top:20px;
margin-bottom:20px;
color:#fff;
font-size:18px;
background-color:skyblue;
width:130px;
height:50px;
border:none;
border-radius:15px;
`
const StyledButton2 = styled.button`

margin-left:20px;
color:#fff;
font-size:18px;
background-color:skyblue;
width:130px;
height:50px;
border:none;
border-radius:15px;`