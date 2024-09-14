import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

class CustomButton extends Component {
  render() {
    const { title, onPress, color = "#5180D2" } = this.props; 
    return (
      <TouchableOpacity style={[styles.buttonImg, { backgroundColor: color }]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonImg: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
