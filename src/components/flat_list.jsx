// import React, {Component} from 'react';
// import Flat from './flat';

// class FlatList extends Component {

//   render = () => {
//     return this.props.flats.map((flat, index) => {
//         return (
//           <Flat
//             flat={flat}
//             key={flat.name}
//             index={index}
//             selected={flat.name === this.props.selectedFlat.name}
//             selectedFlat={this.props.selectedFlat}
//             selectFlat={this.props.selectFlat}
//           />
//         )
//       });
//   };
// }

// export default FlatList;


import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
