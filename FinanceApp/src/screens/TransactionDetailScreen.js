import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{transaction.name}</Text>
        <Text style={styles.text}>Amount: ${transaction.amount}</Text>
        <Text style={styles.text}>Date: {transaction.date}</Text>
        <Text style={styles.text}>Location: {transaction.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  detailsContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default TransactionDetailScreen;
