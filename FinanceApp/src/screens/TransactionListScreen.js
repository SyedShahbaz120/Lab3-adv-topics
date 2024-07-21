import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TransactionItem from '../components/TransactionItem';
import { transactions } from '../data/transactions';

const TransactionsListScreen = () => {
  const navigation = useNavigation();

  const handlePress = (transaction) => {
    navigation.navigate('TransactionDetail', { transaction });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <TransactionItem
            transaction={item}
            onPress={() => handlePress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default TransactionsListScreen;
