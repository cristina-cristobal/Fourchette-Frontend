import React, {Component} from 'react'
import Summary from '../components/Summary'
import Ingredients from '../components/Ingredients'
import Steps from '../components/Steps'
import Tweaks from '../components/Tweaks'

export default class Recipe extends Component {
  render(){
    return(
      <div>
        Recipe Page
        <Summary />
        <Ingredients />
        <Steps />
        <Tweaks />
      </div>
    )
  }
}
