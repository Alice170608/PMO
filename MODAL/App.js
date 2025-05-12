import React, { Component } from 'react';
import {  StyleSheet, View, Text, Button, Modal } from 'react-native';
import Entrar from './Entrar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibleModal: false
    };

    this.entrar = this.entrar.bind(this);

    this.sair = this.sair.bind(this);
  }

  entrar(){
    this.setState({visibleModal:true});
  }

  sair(visible){
    this.setState({visibleModal: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Entrar" onPress={ this.entrar } />

        <Modal animationType='slide' visible={this.state.visibleModal}>
          <View style={{backgroundColor: '#292929', flex:1}}>
            <Text style={{color: '#FFF', fontSize:28}}>Seja Bem-Vindo!</Text>
              <Button title="Sair" onPress={ () => this.sair(false)} />
          </View>
        </Modal>

        <Modal animationType='slide' visible={this.state.visibleModal}>
          <Entrar fechar={ () => this.sair(false)}/>
        </Modal>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;