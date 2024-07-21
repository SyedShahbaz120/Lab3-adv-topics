import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from '../screens/TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createStackNavigator();

const TransactionStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsListScreen}
        options={{ title: 'Transactions', headerShown: false }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
        options={{ title: 'Transaction Detail', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TransactionStackNavigator;
