import React from 'react';
import { Box, Image } from 'native-base';
import { Text } from 'react-native-paper';

interface Props {
  name: string;
  image?: string;
}

const ProductCard: React.FC<Props> = ({ name, image }) => (
  <Box flex={1} m={2} p={2} borderWidth={1} borderRadius={8} alignItems="center">
    {image ? <Image source={{ uri: image }} alt={name} size="xl" /> : null}
    <Text style={{ marginTop: 8 }}>{name}</Text>
  </Box>
);

export default ProductCard;
