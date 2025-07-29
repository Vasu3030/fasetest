import { SafeAreaView, FlatList } from 'react-native'
import EventCard from '../components/EventCard'
import { useEvents } from '../provider/EventsContext'
import Message from '../components/Message'

const FavoritesScreen = () => {
    const { favorites } = useEvents()

    return (
        <SafeAreaView className="flex-1 bg-white">
            {favorites.length === 0 ? (
                <Message message="Aucun favori trouvé" />
            ) : (
                <FlatList
                    className="w-full px-4"
                    data={favorites}
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
            )}
        </SafeAreaView>
    )
}

export default FavoritesScreen
