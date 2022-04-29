import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Player from '../components/Player';
import Sidebar from '../components/Sidebar';
import Center from './Center';
const Home = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify 2.0</title>
      </Head>
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
        <Center />
      </main>
      <div className="sticky bottom-0">
        {/* Player */}
        <Player />
      </div>
    </div>
  );
};

export default Home;
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
