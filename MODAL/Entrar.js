import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Entrar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Seja Bem-vindo!</Text>

        <TouchableOpacity style={styles.botao} onPress={this.props.fechar}>
          <Text style={styles.textoBotao}>SAIR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#2196F3',
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default Entrar;