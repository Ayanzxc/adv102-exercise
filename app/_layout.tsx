import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen 
                name="(tabs)" 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="(information)" />
            <Stack.Screen 
                name="settings" 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
        name="useEffect/useEffect" 
        options={{ title: "useEffect screen" }} 
      />
       <Stack.Screen 
        name="useState/state" 
        options={{ title: "useState screen" }} 
      />
       <Stack.Screen 
        name="exercise_4/index" 
        options={{ title: "index" }} 
      />
        </Stack>
    )
}