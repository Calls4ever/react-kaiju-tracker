import React from 'react'

class CreateKaijuForm extends React.Component {

  render() {
    const { id, name, power, image}=this.props.new
    return (
      <form id='create-kaiju-form' onSubmit={this.props.handleSubmit}>

        <label>Name: </label>
        <input name='name' type='text' placeholder="add your name here.." value={name} onChange={this.props.handleChange}/>

        <label>Power: </label>
        <input name='power' type='text' placeholder="add your power here..." value={power} onChange={this.props.handleChange}/>

        <label>Image: </label>
        <input name='image' type='text' placeholder="add your image url here..." value={image} onChange={this.props.handleChange}/>

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
