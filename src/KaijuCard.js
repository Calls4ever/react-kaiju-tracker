// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {


  renderKaiju=()=>{
    const { id, name, power, image}=this.props.kaiju
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{name}</h2>
        <h3 className='kaiju-card-power'>Power: {power}</h3>

        <img className='kaiju-card-image' src={image} alt={name} />

        {/* What should this edit button do? */}
        <button className='kaiju-card-edit-button' onClick={()=>this.props.handleGenerateEditForm(id)}>Edit</button>
        <button style={{"marginLeft": "150px"}} className='kaiju-card-edit-button' onClick={()=>this.props.handleDelete(id)}>Delete</button>

      </div>
    )
  }
  // How can we show the edit form conditionally?
  render() {
    return(
      <>
      {(this.props.edit.id===undefined)?this.renderKaiju():<EditKaijuForm edit={this.props.edit} 
      handleChange={this.props.handleChange}
      handleGenerateEditForm={this.props.handleGenerateEditForm}
      handleSubmit={this.props.handleSubmit}/>}
      
      </>
    )
  }
}

export default KaijuCard
