import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
import Head from "next/head";

function AllEvents(props) {
  const events = props.events;
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='Find the best event for you!' />
      </Head>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEvents;
