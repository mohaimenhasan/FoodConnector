import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchOrders } from '../services/orders';

interface Order {
  id: string;
  item: string;
  quantity: number;
  price: number;
}

const OrdersScreen: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders', error);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.item} - {item.quantity} pcs - ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OrdersScreen;
