// // PopupComponent.js
// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// const PopupComponent = () => {
//   const [show, setShow] = useState(false);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   return (
//     <div className='popup__detail'>
//       <Modal show={show} onHide={handleClose} dialogClassName="modal-fullscreen">
//         <Modal.Header closeButton>
//           <Modal.Title>Somlar Machuu</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>សម្លម្ជូរ(Somlar Machuu) គឺជា​ពាក្យខ្មែរសំដៅទៅលើមុខម្ហូបខ្មែរមួយប្រភេទដែលប្រជាជននិយមចូលចិត្តជាសម្លប្រពៃណីមួយរបស់ខ្មែរសម្រាប់​ប្រភេទសម្លមានឱជារស​ជូរ ។</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default PopupComponent;
