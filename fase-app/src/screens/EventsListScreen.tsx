import { SafeAreaView, FlatList } from 'react-native'
import EventCard from '../components/EventCard'
import { useEvents } from '../provider/EventsContext'

const EventListScreen = () => {
  const { events } = useEvents()

  return (
    <SafeAreaView className="flex flex-col items-center justify-center bg-white">
      <FlatList
        className="w-full px-4"
        data={events}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <EventCard
            id={item.id}
            title={item.title}
            date={item.date}
            imageUrl={item.image}
            isFavorite={item.is_favorite}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default EventListScreen
