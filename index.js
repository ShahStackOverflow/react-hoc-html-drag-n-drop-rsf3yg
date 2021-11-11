import React, { Component } from 'react';
import { render } from 'react-dom';

import { drag, drop } from './hoc/dragDropHocs';
import { Admin } from './components/Admin';
import { Guest } from './components/Guest';
import { Panel } from './components/Panel';

const AdminUser = drag(Admin)('admin item');
const GuestUser = drag(Guest)('guest item');
const Button = drag(() => <button>Drag Me</button>)('my button');
const Input = drag(() => <input placeholder="Name" />)('my input');
const DropArea = drop(Panel);

class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <Input />
        <AdminUser />
        <GuestUser />
        <DropArea></DropArea>
        <hr />
        <DropArea></DropArea>
        <hr />
        <em>Drag Text and buttons into the square</em>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
