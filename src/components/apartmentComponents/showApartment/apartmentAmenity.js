import * as React from "react";

class Fasilities extends React.Component{
    render(){
        return <div className=" pl-0">
            <h4>{this.props.name}</h4>
            <div>
                <ul className="amenities border-bottom border-top pl-0 text-muted">
                    {this.props.amenites.map((el,index)=>{
                        return  <li key={index} className="amenity-single">{el}</li>
                    })}
                </ul>
            </div>
        </div>
    }
}

export default Fasilities;