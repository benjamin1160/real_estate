import Head from "next/head";
import { getProperties } from "@/features/common/api/getProperties";
import DefaultLayout from "@/features/Layouts/DefaultLayout";
import HeroBanner from "@/features/Home/components/HeroBanner";
import FeaturedProperties from "@/features/Home/components/FeaturedProperties";

const LandingPage = ({ properties }) => {
  return (
    <>
      <Head>
        <title>Casaz Landing Page</title>
      </Head>
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties featuredProperties={properties} />
      </DefaultLayout>
    </>
  );
};

export default LandingPage;

export async function getStaticProps() {
  const properties = await getProperties(5);
  return {
    props: { properties }
  };
}
