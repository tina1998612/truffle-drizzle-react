// shortcut: rnce

import { Component, default as React } from 'react';
import { Button, View } from 'react-native';
export class CreateNewAcc extends Component {

  // componentDidMount() {
  //   const { drizzle, drizzleState } = this.props;
  //   console.log(drizzle.web3)
  // }

  creatNewAcc(web3) {
    console.log(web3)
    web3.eth.personal.newAccount('pwd').then(val => console.log(val))
  }

  render() {
    const web3 = this.props.drizzle.web3
    return (
      <View>
        <Button title="create new account" onPress={() => this.creatNewAcc(web3)} />
      </View>
    )
  }
}

export default CreateNewAcc
