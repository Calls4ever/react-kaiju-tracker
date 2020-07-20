import React from 'react'

class EditKaijuForm extends React.Component {
  
  
  
  
  render() {
    const {name, power,id, image}=this.props.edit
    return (
      <>
        <form className='kaiju-card-edit-form' onSubmit={(e)=>this.props.handleSubmit(e,id)} >

          <label>Name:  </label>
          <input name='name' type='text' onChange={this.props.handleChange} value={name} />
          <br/>

          <label>Power: </label>
          <input name='power' type='text' value={power} onChange={this.props.handleChange}/>
          <br/>

          <label>Image URL: </label>
          <input name ='image' type='text' value={image} onChange={this.props.handleChange}/>
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
