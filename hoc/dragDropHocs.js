import React from 'react';

/**
 * Drag HOC
 */
export const drag = Comp => msg => {
  return class extends React.Component {
    drag(ev) {
      ev.dataTransfer.setData("data", msg);
    }

    render() {
      return (<div draggable={true}
                   onDragStart={event => this.drag(event)} >
        <Comp {...this.props} />

      </div>)
    }
  }
}

/**
 * Drop HOC
 */
export const drop = Comp => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = { list: []}
    }
    allowDrop(ev) {
      ev.preventDefault();
    }

    drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("data");
      this.setState({ list: [...this.state.list, data]})
    }

    render() {
      return (
        <span onDrop={event => this.drop(event)}
             onDragOver={event => this.allowDrop(event)}
             style={{border: '1px dotted black', display: 'inline-block'}}>
          <Comp {...this.props} {...this.state }/>
      </span>)
    }
  }
}

