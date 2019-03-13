// shortcut: rnce

import { Component, default as React } from 'react';
import { Button, View } from 'react-native';
import { Text } from 'react-native-elements';
export class CreateNewAcc extends Component {

  state = { accs: ['0x0'] }

  // componentDidMount() {
  //   const { drizzle, drizzleState } = this.props;
  //   console.log(drizzle.web3)
  // }

  creatNewAcc(web3) {
    console.log(web3)
    web3.eth.personal.newAccount('pwd').then(val => {
      this.setState(prevState => { prevState.accs.push(val) })
    })
  }

  render() {
    const web3 = this.props.drizzle.web3
    return (
      <View>
        <Button title="create new account" onPress={() => this.creatNewAcc(web3)} />
        {
          this.state.accs.map((item, index) => <Text key={index}>{item}</Text>)
        }

      </View>
    )
  }
}

export default CreateNewAcc
