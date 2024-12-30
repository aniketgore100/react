import React from "react";

class Userclass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }

    render(){
        const{name, surname} = this.props;
        const {count} = this.state;
        
        
        return<>

        <button onClick={()=>{
            this.setState({
                count : this.state.count + 1
            })
        }}>Add</button>
        <h2>{count}</h2>
         <h1>{name}{surname}</h1>


        </>
    }
}

export default Userclass;