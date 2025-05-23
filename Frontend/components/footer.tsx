import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Footer() {
  // Helper function to handle button press and highlight the selected one
  const handlePress = (button: string, onPress: () => void) => {
    onPress(); // Call the respective press function
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={[styles.iconContainer]}
        onPress={() => handlePress("data", () => router.push("/"))}
      >
        <Ionicons name="map-outline" size={28} color="white" />
        <Text style={styles.iconText}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer]}
        onPress={() => handlePress("analytics", () => router.push("/data"))}
      >
        <Ionicons name="bar-chart-outline" size={28} color="white" />
        <Text style={styles.iconText}>Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer]}
        onPress={() => handlePress("heatmap", () => router.push("/analytics"))}
        // onPress={() => handlePress("heatmap", onHeatMapPress)}
      >
        <Ionicons name="analytics-outline" size={28} color="white" />
        <Text style={styles.iconText}>Analytics</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer]}
        onPress={() => handlePress("weather", () => router.push("/weather"))}
      >
        <Ionicons name="partly-sunny-outline" size={28} color="white" />
        <Text style={styles.iconText}>Weather</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer]}
        onPress={() => handlePress("settings", () => router.push("/settings"))}
      >
        <Ionicons name="settings-sharp" size={28} color="white" />
        <Text style={styles.iconText}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#A20025",
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    bottom: 0,
    position: "absolute",
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  iconText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  // Style for the selected button (darker shade of red)
  selectedButton: {
    backgroundColor: "#8B0000", // Darker red
    borderRadius: 8,
    padding: 5,
  },
});
