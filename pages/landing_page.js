import Head from "next/head";
import { Box, Button, Grid, GridItem, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import DefaultLayout from "@/features/Layouts/DefaultLayout";

/*
  Recommended CSS structure:
  - Use a clean white background for each section.
  - Apply mobile-first styles with Chakra UI responsive props.
  - Limit content width with maxWidth="1280px" and center using margin="0 auto".
*/

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <DefaultLayout>
        {/* Hero + Video Section */}
        <Box backgroundColor="white" paddingY="3rem">
          <Box maxWidth="1280px" margin="0 auto" paddingX="1rem">
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6} alignItems="center">
              <GridItem>
                <Heading as="h1" fontSize="3xl" marginBottom="1rem">
                  [INSERT HEADLINE HERE]
                </Heading>
                <Text fontSize="xl" marginBottom="1.5rem">
                  [INSERT SUBHEADLINE HERE]
                </Text>
                <Button
                  as="a"
                  href="/credit-application"
                  colorScheme="blue"
                >
                  [INSERT BUTTON TEXT HERE]
                </Button>
              </GridItem>
              <GridItem>
                <Box position="relative" height={{ base: "200px", md: "100%" }} backgroundColor="gray.200">
                  <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" fontWeight="bold">
                    Video Placeholder
                  </Text>
                  <Text position="absolute" bottom="0" left="0" padding="0.5rem" backgroundColor="whiteAlpha.800" fontSize="sm">
                    Do you have land?
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Box>

        {/* Pain Points Section */}
        <Box backgroundColor="white" paddingY="3rem">
          <Box maxWidth="1280px" margin="0 auto" paddingX="1rem">
            <Heading as="h2" fontSize="2xl" marginBottom="1rem">
              Are you sick of…
            </Heading>
            <UnorderedList spacing={2} fontSize="lg">
              <ListItem>[PAIN POINT 1]</ListItem>
              <ListItem>[PAIN POINT 2]</ListItem>
              <ListItem>[PAIN POINT 3]</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        {/* Solutions Section */}
        <Box backgroundColor="white" paddingY="3rem">
          <Box maxWidth="1280px" margin="0 auto" paddingX="1rem">
            <Heading as="h2" fontSize="2xl" marginBottom="1rem">
              [INSERT SOLUTIONS TITLE HERE]
            </Heading>
            <UnorderedList spacing={2} fontSize="lg">
              <ListItem>Solution One: [INSERT SHORT DESCRIPTION]</ListItem>
              <ListItem>Solution Two: [INSERT SHORT DESCRIPTION]</ListItem>
              <ListItem>Solution Three: [INSERT SHORT DESCRIPTION]</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box backgroundColor="white" paddingY="3rem">
          <Box maxWidth="1280px" margin="0 auto" paddingX="1rem">
            <Heading as="h2" fontSize="2xl" marginBottom="1rem">
              Frequently Asked Questions
            </Heading>
            <Box marginBottom="1rem" backgroundColor="gray.200" height="200px" display="flex" justifyContent="center" alignItems="center">
              [FAQ Video Embed]
            </Box>
            <Box backgroundColor="gray.50" padding="1rem">
              [Text FAQ Block]
            </Box>
          </Box>
        </Box>

        {/* Conversion Section */}
        <Box backgroundColor="white" paddingY="3rem">
          <Box maxWidth="1280px" margin="0 auto" paddingX="1rem" textAlign="center">
            <Heading as="h2" fontSize="2xl" marginBottom="1rem">
              [INSERT CONVERSION SECTION TITLE]
            </Heading>
            <Text marginBottom="1.5rem">
              Copy emphasizing instant credit application, trust-building, and clear instructions to drive conversion.
            </Text>
            <Button
              as="a"
              href="/credit-application"
              colorScheme="green"
              size="lg"
            >
              APPLY NOW
            </Button>
          </Box>
        </Box>
      </DefaultLayout>
    </>
  );
};

export default LandingPage;
