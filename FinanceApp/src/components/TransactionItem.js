import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TransactionItem = ({ transaction, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.amount}>${transaction.amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
  },
  amount: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default TransactionItem;
