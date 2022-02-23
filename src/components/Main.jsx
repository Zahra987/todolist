import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
<>
                <div id="myDIV" className="header">
                    <h2 >My To Do List</h2>
                    <input type="text" id="myInput" placeholder="Title..."/>
                        <span className="addBtn">Add</span>
                </div>

                <ul id="myUL">
                    <li>Hit the gym</li>
                    <li className="checked">Pay bills</li>
                    <li>Meet George</li>
                    <li>Buy eggs</li>
                    <li>Read a book</li>
                    <li>Organize office</li>
                </ul>
           </>
        );
    }
}

export default Main;