import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { formatDateToFrench } from "../lib/dateHelper";
import { useEvents } from "../provider/EventsContext";
import { BookmarkIcon } from "./Bookmark";

type EventCardProps = {
  id: string;
  title: string;
  date: string;
  imageUrl?: string;
  isFavorite: boolean;
};

const EventCard = ({
  id,
  title,
  date,
  imageUrl,
  isFavorite,
}: EventCardProps) => {
  const { toggleFavorite } = useEvents();

  const onToggleFavorite = () => {
    toggleFavorite(id);
  };

  return (
    <View className="mb-4 rounded-lg p-2 mt-4 bg-gray-300 shadow-lg">
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-40 rounded-lg"
          resizeMode="cover"
        />
      )}
      <Text className="text-lg font-semibold mt-2">{title}</Text>
      <Text className="text-gray-500">{formatDateToFrench(date)}</Text>

      <TouchableOpacity
        className={`absolute top-2 right-2 p-2 rounded-full ${isFavorite ? "bg-yellow-500" : "bg-gray-400"
          }`}
        onPress={onToggleFavorite}
      >
        <BookmarkIcon />
      </TouchableOpacity>
    </View>
  );
};

export default EventCard;
