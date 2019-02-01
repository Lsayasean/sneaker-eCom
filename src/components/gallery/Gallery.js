import React, { Component } from "react";
import "./gallery.css";

class Gallery extends Component {
  constructor(props){
    super(props)

    this.state = {
      photos: [
        {image:'https://images.unsplash.com/photo-1542838686-ddebb563fef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
        {image:'https://images.unsplash.com/photo-1547053295-bb530ab5af2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'},
        {image:'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'}

      ]
    }
  }
  render() {

    const des = this.state.photos.map(ele => {
      return(
        <div className='pictures'>
          <img className ='pics' src={ele.image} />
        </div>
      )
    })

    return (
      <div className="gallery-main">
        <div>
          <h3 className="gal-title">Designs by ME</h3>
        </div>
        <div className='gallery-examples'>
            {des}
        </div>
      </div>
    );
  }
}

export default Gallery;
