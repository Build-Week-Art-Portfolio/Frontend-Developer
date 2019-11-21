import React from "react";

class EditCard extends React.Component {

handleChange = e => {
    this.setState({
      art: {
        ...this.state.art,
        [e.target.name]: e.target.value
      }
    })
  }

}

export default EditCard;