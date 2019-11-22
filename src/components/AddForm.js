import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';

const emptyForm = {  }

const AddForm = (props) => {
  const [art, setArt] = useState(emptyForm);

  const handleChange = e => {
    setArt ({
        ...art,
        [e.target.name]: e.target.value
      })
  };

  const Dispatch = useDispatch();

  
  // componentDidMount() {
  //   console.log('this is props', this.props);
  // }

  const addArt = e => {
    e.preventDefault();

    const newPost = {
      ...art, 
      postdate: Date.now().toString(),
      user: {userid: props.userID}
    }

    axios
      .post(`https://als-artportfolio.herokuapp.com/art/art`, newPost)
      .then(res => {
        props.history.push(`/`);
        Dispatch({ type: "UPDATE"});
      })
      .catch(err => {
        console.log(err);
      });
  };

    return (
      <div className="addFormStyles">
        <h2>Post Your Art!</h2>
        <form onSubmit={addArt}>
          <h4>Title: </h4>
          <input className="titleStyles"
            type="text"
            name="title"
            value={art.title}
            onChange={handleChange}
            required
          />
          <h4>Describe Your Art: </h4>          
          <input className="titleStyles"
            type="text"
            name="description"
            value={art.description}
            onChange={handleChange}
            required
          /><br />
          <h4>Medium: </h4>          
          <input className="titleStyles"
            type="text"
            name="arttype"
            value={art.arttype}
            onChange={handleChange}
            required
          /><br />
            <h4>URL For Your Art: </h4>          
          <input className="titleStyles"
            type="text"
            name="imageurl"
            value={art.imageurl}
            onChange={handleChange}
            required
          /><br />
          <button type="submit" className="postButton">Post</button>
        </form>
      </div>
    )
}

const mapStateToProps = state => ({
    userID: state.userID,
});

export default connect(
    mapStateToProps,
)(AddForm);