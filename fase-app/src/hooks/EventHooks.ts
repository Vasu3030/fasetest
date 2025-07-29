import { useEffect, useState } from "react";
import { getEvents, getUserFavorites, type Event } from "../services/EventServices";

export const getEventsHook = () => {

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
      
    };

    fetchEvents();
  }, []);
  
  return {events, setEvents}
}


export const getFavoritesHook = () => {

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getUserFavorites();
      setEvents(data);      
    };
    
    fetchEvents();
  }, []);
  
  return {events, setEvents}
}