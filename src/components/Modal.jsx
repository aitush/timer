// import React from "react";
// import { createPortal } from "react-dom";
// import styled from 'styled-components'

// const Modal = ({onClose}) => {
//     return (
//         <>
//         <Backdrop/>
//          <ModalStyled>
//             <ModalP>Do you want delete it?</ModalP>
//             <ModalButtonYes onClick={onClose}>Yes</ModalButtonYes>
//         </ModalStyled>
    
//         </>
//     ) 
// }
// export default Modal

// const ModalStyled = styled.div`
//     min-width:400px;
//     min-height:220px;
//     background-color:#FEC5E5;
//     padding:30px;
//     box-sizing: border-box;
//     position: absolute;
//     top:50%;
//     left:50%;
//     transform:translate(-50%, -50%);
//     border-radius:10px;


// `
// const Backdrop=styled.div`
//     position:fixed;
//     top:0;
//     right:0;
//     left:0;
//     bottom:0;
   
//     background-color:rgba(0,0,0,0.7)
// `
// const ModalButtonYes=styled.button`
//     border-radius:5px;
  
//     background-color: white;
//     border:none;
//     margin-left:130px;
// `

// const ModalP= styled.p`
//     color: #FE7F9C;
//     text-align:center;
// `