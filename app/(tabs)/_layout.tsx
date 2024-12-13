import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)/index" options={{  headerShown:false, href:null}} />
    </Tabs>
  );
}
