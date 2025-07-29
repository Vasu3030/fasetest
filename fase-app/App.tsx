import "./global.css";
import BottomTabs from "./src/navigation/BottomTabs";
import { EventsProvider } from "./src/provider/EventsContext";

export default function App() {
  return (
    <EventsProvider>
      <BottomTabs />
    </EventsProvider>
  );
  ;
}
