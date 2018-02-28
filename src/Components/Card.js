import React , {Component} from "react";
export default class extends Component{
    constructor(){
        super();
        this.state={
            posts:""
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts/1").
        then(response=>response.json()).
        then(json=>this.setState({
                post:json.body
        }))
    }
    render(){
        return(
        <div>
        <h1> Posts</h1>\
        <div className="posts">
        <p> {this.state.post}</p>
        </div>
        </div>
        )
    }
}