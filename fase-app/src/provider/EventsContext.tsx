import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getEvents, addFavorite, removeFavorite, Event } from "../services/EventServices";

type EventsContextType = {
  events: Event[];
  favorites: Event[];
  toggleFavorite: (eventId: string) => Promise<void>;
};

const EventsContext = createContext<EventsContextType | undefined>(undefined);

type EventsProviderProps = {
  children: ReactNode;
};

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [favorites, setFavorites] = useState<Event[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getEvents();
      setEvents(data);
      setFavorites(data.filter(e => e.is_favorite));
    })();
  }, []);

  const toggleFavorite = async (eventId: string) => {
    const isFav = favorites.some(f => f.id === eventId);

    if (isFav) {
      await removeFavorite(eventId);
      setFavorites(prev => prev.filter(f => f.id !== eventId));
      setEvents(prev =>
        prev.map(e =>
          e.id === eventId ? { ...e, is_favorite: false } : e
        )
      );
    } else {
      await addFavorite(eventId);
      const addedEvent = events.find(e => e.id === eventId);
      if (addedEvent) {
        setFavorites(prev => [...prev, { ...addedEvent, is_favorite: true }]);
      }
      setEvents(prev =>
        prev.map(e =>
          e.id === eventId ? { ...e, is_favorite: true } : e
        )
      );
    }
  };

  return (
    <EventsContext.Provider value={{ events, favorites, toggleFavorite }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (!context) throw new Error("useEvents must be used within EventsProvider");
  return context;
};
