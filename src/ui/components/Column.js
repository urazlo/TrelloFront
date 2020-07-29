// import React from 'react';

// import styled from 'styled-components';

// import Header from 'ui/components/Header';

// class Column extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       // boards: boardsStorage.get(),
//     };
//   }

//   // updateLocalStorage = () => {
//   //   boardsStorage.set(this.state.boards);
//   // }

//   // addBoard = () => {
//   //   const { boards, title } = this.state;

//   //   if (title.trim()) {
//   //     const board = {
//   //       id: getBoardId(),
//   //       title: title.trim(),
//   //     };

//   //     this.setState({
//   //       boards: [...boards, board],
//   //       title: '',
//   //     }, this.updateLocalStorage);
//   //   }
//   // }

//   // onChangeHandler = (e) => {
//   //   this.setState({ title: e.target.title });
//   // }

//   // handleEnter = (e) => {
//   //   if (e.key === 'Enter') { this.addBoard(); }
//   // };

//   render() {
//     return (
//       <>
//         <Header />
//         <StyledPage>

//           <div className="js-list list-wrapper">
//             <div className="list js-list-content">
//               <div className="list-header js-list-header u-clearfix is-menu-shown">
//                 <div className="list-header-target js-editing-target">

//                 </div>
//                 <h2 className="list-header-name-assist js-list-name-assist" dir="auto">
//                   dsa
//         </h2>
//                 <textarea
//                   className="list-header-name mod-list-name js-list-name-input"
//                   aria-label="dsa"
//                   spellCheck="false"
//                   dir="auto"
//                   maxLength="512"
//                 >
//                   dsa
//         </textarea>
//                 <div className="list-header-extras">
//<a className="list-header-extras-menu dark-hover js-open-list-menu icon-sm icon-overflow-menu-horizontal" href="#">
//                     <div>

//                     </div>
//                   </a>
//                 </div>
//               </div>
//<div className="list-cards u-fancy-scrollbar u-clearfix js-list-cards js-sortable ui-sortable">
//                 <a className="list-card js-member-droppable ui-droppable" href="/c/8nyYyqOQ/1-1">
//                   <div className="list-card-cover js-card-cover">

//                   </div>
// <span className="icon-sm icon-edit list-card-operation dark-hover js-open-quick-card-editor js-card-menu">

//                   </span>
//                   <div className="list-card-stickers-area js-stickers-area hide">
//                     <div className="stickers js-card-stickers">

//                     </div>
//                   </div>
//                   <div className="list-card-details js-card-details">
//                     <div className="list-card-labels js-card-labels">

//                     </div>
//                     <span className="list-card-title js-card-name" dir="auto">
//                       <span className="card-short-id hide">
//                         #1
//         </span>
//         1
//         </span>
//                     <div className="badges">
//                       <span className="js-badges">

//                       </span>
//                       <span className="custom-field-front-badges js-custom-field-badges">
//                         <span>

//                         </span>
//                       </span>
//                       <span className="js-plugin-badges">
//                         <span>

//                         </span>
//                       </span>
//                     </div>
//                     <div className="list-card-members js-list-card-members">

//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </StyledPage>
//       </>
//     );
//   }
// }

// export default Column;
