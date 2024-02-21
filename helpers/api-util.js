export async function getAllEvents() {
  try {
    const response = await fetch(
      "https://react-starting-app-91c61-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();

    const events = [];

    for (const key in data) {
      events.push({
        id: key,
        ...data[key],
      });
    }
    return events;
  } catch (e) {}
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
