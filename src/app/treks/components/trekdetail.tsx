import React from 'react';
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Text, Box, Flex, Grid, Heading, Button, Input, DatePicker } from '@/components/ui/input';

const mockData = {
  images: [
    '/images/trek1.jpg',
    '/images/trek2.jpg',
    '/images/trek3.jpg',
    '/images/trek4.jpg',
  ],
  title: 'Mount Everest Base Camp Trek',
  description: 'A thrilling adventure to the base camp of the world\'s highest peak.',
  difficulty: 'High',
  duration: '14 days',
  elevation: '5,364m',
  region: 'Nepal',
};

const TrekDetails = () => {
  return (
    <Box p="4">
      <Heading as="h2" mb="4">{mockData.title}</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap="4" mb="4">
        {mockData.images.map((src, index) => (
          <Image key={index} src={src} alt={`Trek image ${index + 1}`} width={100} height={200} objectFit="cover" />
        ))}
      </Grid>
      <Box mb="4">
        <Text fontSize="lg">{mockData.description}</Text>
        <Text><strong>Difficulty:</strong> {mockData.difficulty}</Text>
        <Text><strong>Duration:</strong> {mockData.duration}</Text>
        <Text><strong>Elevation:</strong> {mockData.elevation}</Text>
        <Text><strong>Region:</strong> {mockData.region}</Text>
      </Box>
      <Flex direction="column" p="4" borderWidth="1px" borderRadius="md" boxShadow="md">
        <Heading as="h3" mb="4">Book Your Trek</Heading>
        <Box mb="4">
          <DatePicker placeholder="Select date range" />
        </Box>
        <Box mb="4">
          <Input type="number" placeholder="Number of people" />
        </Box>
        <Button colorScheme="blue">Checkout</Button>
      </Flex>
    </Box>
  );
};

export default TrekDetails;