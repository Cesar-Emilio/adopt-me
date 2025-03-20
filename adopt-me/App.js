// App.js
import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "./context/AuthContext";
import AppNavigator from "./navigation/AppNavigator";
import { useState } from "react";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <PaperProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </PaperProvider>
  );
}
