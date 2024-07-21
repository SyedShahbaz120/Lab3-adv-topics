import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { transactions } from '../data/transactions';

const SummaryScreen = () => {
  
  const totalExpenses = transactions.reduce((acc, item) => acc + item.amount, 0);

 
  const balance = 500.00;  

  const [lowestItem, setLowestItem] = useState({});
  const [highestItem, setHighestItem] = useState({});

  useEffect(() => {
    
    const sortedList = [...transactions].sort((a, b) => a.amount - b.amount);
    setLowestItem(sortedList[0] || {});
    setHighestItem(sortedList[sortedList.length - 1] || {});
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Total Transactions:</Text>
        <Text style={styles.value}>{transactions.length}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Total Expenses:</Text>
        <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Balance:</Text>
        <Text style={styles.value}>${balance.toFixed(2)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>Lowest Item</Text>
        <View style={styles.row}>
          <Text style={styles.label}>{lowestItem.name || 'N/A'}</Text>
          <Text style={styles.value}>${lowestItem.amount ? lowestItem.amount.toFixed(2) : '0.00'}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>Highest Item</Text>
        <View style={styles.row}>
          <Text style={styles.label}>{highestItem.name || 'N/A'}</Text>
          <Text style={styles.value}>${highestItem.amount ? highestItem.amount.toFixed(2) : '0.00'}</Text>
        </View>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  itemContainer: {
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default SummaryScreen;
