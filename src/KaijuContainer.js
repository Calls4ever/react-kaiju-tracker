//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [],
    newKaiju: {}, 
    edit: {}
  }
  componentDidMount(){
    requests.fetchKaijus()
    .then(kaijus=>{
      this.setState({kaijus})
    })
    
  }
  handleGenerateEditForm=(id)=>{
    this.setState({edit: this.state.kaijus.find(kaiju=> kaiju.id===id)}) 
  }
  handleChange=(e)=>{
    this.setState({edit: {...this.state.edit, [e.target.name]: e.target.value}})
  }
  handleSubmit=(e,id)=>{
    e.preventDefault()
    
    
    requests.updateKaiju(id,this.state.edit)
    .then(updatedKaiju=>{
      this.setState({
        kaijus: [...this.state.kaijus.map(kaiju=>{
          if(kaiju.id==id){

            return kaiju=updatedKaiju
          }
          else return kaiju
       
        })] ,
        edit: {}
    })
    
  })
}
  handleCreatFormChange=e=>{
    this.setState({newKaiju: {...this.state.newKaiju, [e.target.name]: e.target.value} })
  }
  handleCreateFormSubmit=e=>{
    e.preventDefault()
    requests.createKaiju(this.state.newKaiju)
    .then(createdKaiju=>{
       this.setState({kaijus: [...this.state.kaijus, createdKaiju]})
    })
   
  }
  handDelete=id=>{
    requests.deleteKaiju(id)
    this.setState({kaijus: [...this.state.kaijus.filter(kaiju=> kaiju.id!=id)]})
  }

  render() {
   console.log(this.state.newKaiju, this.state.kaijus)
    return (
      <>
      
        <CreateKaijuForm 
        handleChange={this.handleCreatFormChange} 
        handleSubmit={this.handleCreateFormSubmit}
        new={this.state.newKaiju}/>

        <div id='kaiju-container'>

        {this.state.kaijus.map(kaiju=><KaijuCard kaiju={kaiju} 
        key={kaiju.id}
        edit={this.state.edit}
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}
        handleGenerateEditForm={this.handleGenerateEditForm}
        handleDelete={this.handDelete}/>)}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
