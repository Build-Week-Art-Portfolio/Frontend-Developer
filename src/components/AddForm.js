import React from 'react';
import axios from 'axios';

const emptyForm = {  }

class AddForm extends React.Component {
  state = {
    art: emptyForm
  }

  handleChange = e => {
    this.setState({
      art: {
        ...this.state.art,
        [e.target.name]: e.target.value
      }
    })
  }

  addArt = e => {
    e.preventDefault();
    const newPost = {
        // ...this.state, 
        // art: {
            ...this.state.art, 
            postdate: Date.now(),
            // user: {userid: 1 }
        
    }
    console.log(newPost)
    axios
      .post("https://als-artportfolio.herokuapp.com/art/art", newPost)
      .then(res => {
        this.setState({ posts: res.data });
        console.log(res);
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      picture: "",
      description: "",
      selectedfile: null
    });
  };

  render() {
    return (
      <div className="addFormStyles">
        <h2>Post Your Art!</h2>
        <form onSubmit={this.addArt}>
          <h4>Title: </h4>
          <input className="titleStyles"
            type="text"
            name="title"
            value={this.state.art.title}
            onChange={this.handleChange}
            required
          />
          {/* <h4>Artist: </h4>          
          <input className="titleStyles"
            type="text"
            name="user"
            value={this.state.art.user}
            onChange={this.handleChange}
            required
          /><br /> */}
          <h4>Describe Your Art: </h4>          
          <input className="titleStyles"
            type="text"
            name="description"
            value={this.state.art.description}
            onChange={this.handleChange}
            required
          /><br />
          <h4>Medium: </h4>          
          <input className="titleStyles"
            type="text"
            name="arttype"
            value={this.state.art.arttype}
            onChange={this.handleChange}
            required
          /><br />
            <h4>URL For Your Art: </h4>          
          <input className="titleStyles"
            type="text"
            name="imageurl"
            value={this.state.art.imageurl}
            onChange={this.handleChange}
            required
          /><br />
          <button type="submit" className="postButton">Post</button>
        </form>
      </div>
    )
  }
}

export default AddForm; 