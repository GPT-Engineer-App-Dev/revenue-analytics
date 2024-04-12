// Complete the Index page component using Chakra UI and react-icons for a business dashboard
import { Box, Flex, Text, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaChartBar, FaDollarSign, FaBusinessTime } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Business Dashboard
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        {/* Sales Data Section */}
        <VStack bg="blue.100" p={4} borderRadius="md" boxShadow="md">
          <FaChartBar size="3em" />
          <Text fontSize="xl" fontWeight="bold">
            Sales Data
          </Text>
          <Box w="100%" h="200px" bg="white" borderRadius="md">
            {/* Placeholder for Sales Chart */}
            <Text p={5}>Interactive Sales Chart Here</Text>
          </Box>
        </VStack>

        {/* Revenue Data Section */}
        <VStack bg="green.100" p={4} borderRadius="md" boxShadow="md">
          <FaDollarSign size="3em" />
          <Text fontSize="xl" fontWeight="bold">
            Revenue Data
          </Text>
          <Box w="100%" h="200px" bg="white" borderRadius="md">
            {/* Placeholder for Revenue Chart */}
            <Text p={5}>Interactive Revenue Chart Here</Text>
          </Box>
        </VStack>

        {/* Placeholder for Other Business Metrics */}
        <VStack bg="purple.100" p={4} borderRadius="md" boxShadow="md">
          <FaBusinessTime size="3em" />
          <Text fontSize="xl" fontWeight="bold">
            Other Metrics
          </Text>
          <Box w="100%" h="200px" bg="white" borderRadius="md">
            {/* Placeholder for Other Metrics Chart */}
            <Text p={5}>Interactive Metrics Chart Here</Text>
          </Box>
        </VStack>

        {/* Additional Placeholder for Future Metrics */}
        <VStack bg="orange.100" p={4} borderRadius="md" boxShadow="md">
          <FaBusinessTime size="3em" />
          <Text fontSize="xl" fontWeight="bold">
            Future Metrics
          </Text>
          <Box w="100%" h="200px" bg="white" borderRadius="md">
            {/* Placeholder for Future Metrics Chart */}
            <Text p={5}>Interactive Future Metrics Chart Here</Text>
          </Box>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
