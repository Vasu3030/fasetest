import { supabase } from "../lib/supabase";

export type Event = {
  id: string;
  title: string;
  date: string;
  image?: string;
  is_favorite: boolean;
};

// ID utilisateur simulé
const MOCK_USER_ID = process.env.EXPO_PUBLIC_MOCK_USER_ID || "8";

/**
 * Récupère tous les événements et ajoute la propriété is_favorite
 */
export async function getEvents(userId = MOCK_USER_ID): Promise<Event[]> {
  const { data, error } = await supabase.rpc("get_events_with_favorite", {
    p_user_id: userId,
  });
      
  if (error) {
    console.error("Erreur getEvents:", error.message);
    return [];
  }
      
  // Ajouter une clé `is_favorite` en fonction de la jointure
  return data;
}

/**
 * Récupère les favoris de l'utilisateur
 */
export async function getUserFavorites(user_id = MOCK_USER_ID): Promise<Event[]> {
  const data = await getEvents(user_id);

  return data.filter((event) => event.is_favorite);
}

/**
 * Ajoute un favori
 */
export async function addFavorite(eventId: string, userId = MOCK_USER_ID) {
  const { data, error } = await supabase
    .from("user_favorites")
    .insert([{ user_id: userId, event_id: eventId }]);
  
  if (error) console.error("Erreur addFavorite:", error.message);
}

/**
 * Supprime un favori
 */
export async function removeFavorite(eventId: string, userId = MOCK_USER_ID) {
  const { error } = await supabase
    .from("user_favorites")
    .delete()
    .eq("user_id", userId)
    .eq("event_id", eventId);

  if (error) console.error("Erreur removeFavorite:", error.message);
}
