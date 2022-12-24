import { Text, Divider, VStack } from '@chakra-ui/react';
import { useSharedData } from '@/contexts/sharedDataProvider/sharedDataProvider';

export const HUDEditerDisclaimer = () => {
  const { config } = useSharedData();

  return (
    <VStack spacing={2} mb={4}>
      <Divider />
      <Text maxW="58%" textAlign="center" as="div">
        {config.LANGUAGE?.HUD_EDITOR_DISCLAIMER}
        <Text color="blue.300">
          {config.LANGUAGE?.NUMBER_IN_PERCENTAGES}
        </Text>
      </Text>
      <Divider />
    </VStack>
  );
};
