import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "@/features/Layouts/DefaultLayout";
import TextContentBox from "@/features/common/modules/TextContentBox";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Button,
  Flex,
  List,
  ListItem
} from "@chakra-ui/react";

// Recommended CSS structure:
// - Use white (#ffffff) backgrounds and ample spacing for a clean layout.
// - Rely on Chakra UI's responsive props (e.g., `base`, `sm`) to stack elements
//   on mobile and present a 50/50 split on larger screens.
// - Keep components lightweight to ensure fast loading.

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <DefaultLayout>
        {/* Hero + Video Section */}
        <Box backgroundColor="#ffffff" paddingY={{ base: "2rem", sm: "4rem" }}>
          <Grid
            templateColumns="repeat(2, 1fr)"
            maxWidth="1280px"
            margin="0 auto"
            gap="2rem"
            paddingX="2rem"
          >
            {/* Hero */}
            <GridItem colSpan={{ base: 2, sm: 1 }}>
              <Flex direction="column" height="100%" justifyContent="center">
                <Text
                  as="h1"
                  fontSize={{ base: "3xl", sm: "4xl" }}
                  fontWeight="bold"
                  marginBottom="1rem"
                >
                  [INSERT HEADLINE HERE]
                </Text>
                <Text fontSize={{ base: "lg", sm: "xl" }} marginBottom="2rem">
                  [INSERT SUBHEADLINE HERE]
                </Text>
                <Link href="/credit-application" passHref>
                  <Button as="a" colorScheme="blue" width="fit-content">
                    [INSERT BUTTON TEXT HERE]
                  </Button>
                </Link>
              </Flex>
            </GridItem>
            {/* Video */}
            <GridItem colSpan={{ base: 2, sm: 1 }}>
              <Box
                position="relative"
                paddingTop="56.25%"
                backgroundColor="gray.200"
              >
                {/* Placeholder for video embed */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  backgroundColor="gray.300"
                ></Box>
                <Text
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  textAlign="center"
                  color="gray.700"
                  padding="0.5rem"
                  backgroundColor="whiteAlpha.800"
                >
                  Do you have land?
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        {/* Pain Points Section */}
        <Box backgroundColor="#f7f8f9" paddingY={{ base: "2rem", sm: "4rem" }}>
          <Box maxWidth="1280px" margin="0 auto" paddingX="2rem">
            <Text as="h2" fontSize="3xl" marginBottom="1rem">
              Are you sick of…
            </Text>
            <List spacing={3} fontSize="lg" styleType="disc" paddingLeft="1.5rem">
              <ListItem>[PAIN POINT 1]</ListItem>
              <ListItem>[PAIN POINT 2]</ListItem>
              <ListItem>[PAIN POINT 3]</ListItem>
            </List>
          </Box>
        </Box>

        {/* Solutions Section */}
        <Box backgroundColor="#ffffff" paddingY={{ base: "2rem", sm: "4rem" }}>
          <Box maxWidth="1280px" margin="0 auto" paddingX="2rem">
            <Text as="h2" fontSize="3xl" marginBottom="1rem">
              [INSERT SOLUTIONS TITLE HERE]
            </Text>
            <List spacing={3} fontSize="lg" styleType="disc" paddingLeft="1.5rem">
              <ListItem>Solution One: [INSERT SHORT DESCRIPTION]</ListItem>
              <ListItem>Solution Two: [INSERT SHORT DESCRIPTION]</ListItem>
              <ListItem>Solution Three: [INSERT SHORT DESCRIPTION]</ListItem>
            </List>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box backgroundColor="#f7f8f9" paddingY={{ base: "2rem", sm: "4rem" }}>
          <Box maxWidth="1280px" margin="0 auto" paddingX="2rem">
            <Text as="h2" fontSize="3xl" marginBottom="1rem">
              Frequently Asked Questions
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap="2rem">
              <GridItem colSpan={{ base: 2, sm: 1 }}>
                <Box
                  position="relative"
                  paddingTop="56.25%"
                  backgroundColor="gray.200"
                >
                  {/* FAQ Video Embed Placeholder */}
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: 2, sm: 1 }}>
                <TextContentBox title="Questions & Answers">
                  [Text FAQ Block]
                </TextContentBox>
              </GridItem>
            </Grid>
          </Box>
        </Box>

        {/* Conversion Section */}
        <Box backgroundColor="#ffffff" paddingY={{ base: "2rem", sm: "4rem" }}>
          <Box maxWidth="1280px" margin="0 auto" paddingX="2rem" textAlign="center">
            <Text as="h2" fontSize="3xl" marginBottom="1rem">
              [INSERT CONVERSION SECTION TITLE]
            </Text>
            <Text fontSize="lg" marginBottom="2rem">
              Conversion starts here. Apply instantly with our trusted credit
              application and follow the clear instructions below.
            </Text>
            <Link href="/credit-application" passHref>
              <Button as="a" colorScheme="blue" size="lg">
                APPLY NOW
              </Button>
            </Link>
          </Box>
        </Box>
      </DefaultLayout>
    </>
  );
};

export default LandingPage;
