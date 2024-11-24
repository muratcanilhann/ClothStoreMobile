import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./CategoryBox.style";

export default function CategoryBox({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

