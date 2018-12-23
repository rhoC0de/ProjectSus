import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../components/hoc/hoc'

import './list.css';

class List extends Component {
    constructor(){
        super();
        this.state = {
            result:[],
            checked:false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/generator/view')
            .then(res=>this.setState({result:res.data}))
            .then(res=>this.setState({checked:true}))
            .catch(err=>console.log(err.message));
    }
    listTable(){
        (this.state.result).map((code, index)=>{
            return(
                <Aux>
                    {console.log("code")}
                    <tr key={index}>
                        <td>{code.amount}</td>
                        <td>{code.unique}</td>
                        <td>{code.issue}</td>
                        <td>{code.expire}</td>
                    </tr>
                </Aux>
            )
        })
    }
    render(){
        // console.log(this.state.result);
        return (
            <Aux>
                <table>
                    <tbody>
                        <tr>
                            <th>Amount</th>
                            <th>Code</th>
                            <th>Issue date</th>
                            <th>Expiry date</th>
                        </tr>

                        {this.state.checked?
                            (this.state.result).map((code, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{code.amount}</td>
                                        <td>{code.unique}</td>
                                        <td>{code.issue}</td>
                                        <td>{code.expire}</td>
                                    </tr>
                                )
                            }):
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>}
                    </tbody>

                </table>
                    {/* {
                        this.state.checked?this.state.result[0].unique:
                        (this.state.result).map((code,index)=>{
                            return(
                                <div key={index}>
                                    {console.log(code)}
                                    <span>{index}-{code}</span>
                                    <span>{code.unique}</span>
                                    <span>{code.issue}</span>
                                    <span>{code.expire}</span>
                                </div>
                            )
                        })
                    } */}
            </Aux>
        )
    }
}

export default List;