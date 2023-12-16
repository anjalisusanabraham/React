import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false
    };
  }

  componentDidMount() {
    // console.log("component did mount")

  }


  showImage = () => {
    this.setState({ showImage: true });
  }

  hideImage = () => {
    this.setState({ showImage: false });
  }

  render() {
    const { showImage } = this.state;

    return (
      <div>
        <h1>Image</h1>
        <button onClick={this.showImage}>Show Image</button>
        <button onClick={this.hideImage}>Hide Image</button>

        {showImage && (
          <img src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg" alt="Sample" width={400}/>
        )}
      </div>
    );
  }
}

export default Image;
