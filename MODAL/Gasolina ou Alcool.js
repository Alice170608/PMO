import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Modal, TextInput, TouchableOpacity } from "react-native";

const App = () => {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const calcularCombustivel = () => {
    const valor = parseFloat(alcool) / parseFloat(gasolina);
    if (!isNaN(valor)) {
      setResultado(valor < 0.7 ? "Álcool" : "Gasolina");
      setModalVisible(true);
    } else {
      alert("Digite valores válidos para os dois campos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual combustível compensa mais?</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do álcool"
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setAlcool}
        value={alcool}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da gasolina"
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setGasolina}
        value={gasolina}
      />

      <TouchableOpacity style={styles.button} onPress={calcularCombustivel}>
        <Text style={styles.buttonText}>CALCULAR</Text>
      </TouchableOpacity>

      <Modal transparent animationType="slide" visible={modalVisible}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Abasteça com: {resultado}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#006341",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#00A859",
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  button: {
    backgroundColor: "#00A859",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#006341",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
  },
  modalText: {
    color: "#FFCC00",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#00A859",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default App;
