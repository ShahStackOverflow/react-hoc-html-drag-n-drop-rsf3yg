import React from 'react';

export class Panel extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div style={{ width: '100px', height: '200px'}}>
        <div>Drag here</div>
        <div>Items: {list.length}</div>
        {list.map((el, i) => <div key={i}>{el}</div>)}

      </div>
    )
  }
}
