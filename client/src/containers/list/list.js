import React, { Component } from 'react';
import axios from 'axios';
import './list.css';

class List extends Component {
    constructor(){
        super();
        this.state = {
            // result:{}
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/generator/view')
            .then(result=>this.setState({result:result.data}))
            .then(result=>console.log(this.state.result))
            .catch(err=>console.log(err.message))
    }
    listTable(){
        for (const code of this.state.result) {
            return(
                <tr>
                    <td>{code.amount}</td>
                    <td>{code.unique}</td>
                    <td>{code.issue}</td>
                    <td>{code.expire}</td>
                </tr>
            )
        }
    }
    render(){
        // console.log(this.state.result);
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Amount</th>
                        <th>Code</th>
                        <th>Issue date</th>
                        <th>Expiry date</th>
                    </tr>

                    {/* {this.listTable()} */}
                    
                    
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default List;