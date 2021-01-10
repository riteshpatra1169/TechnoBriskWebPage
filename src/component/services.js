import React,{Component} from 'react';
import '../styles/home.css';

class Services extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render(){
            return(
                <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-dark overflow-hidden">
                <div className="my-3 py-3">
                <div className="hexagon-wrapper">
                    <div className="hexagon">
                        <img width="60" height="60" src={this.props.imgUrl} class="attachment-full size-full" alt="Custom Development" loading="lazy"/>
                    </div>
                </div>
                  <h2 className="display-5">{this.props.heading}</h2>
                </div>
                <div className="bg-light contentDesciption shadow-sm mx-auto">
                    <div className="serviceDescriptionData">
                        {this.props.contentData}
                    </div>
                    
                </div>
              </div>
            );
         }
}



export default Services;