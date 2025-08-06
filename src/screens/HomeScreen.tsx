import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'native-base';
import { Text } from 'react-native-paper';
import { getCategories } from '../api/products';
import ProductCard from '../components/ProductCard';

const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data || res);
      } catch (e) {
        console.warn(e);
      }
    };
    fetchData();
  }, []);

  return (
    <View flex={1} p={4}>
      <Text variant="headlineSmall">Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard name={item.name} image={item.logo_path} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

export default HomeScreen;
