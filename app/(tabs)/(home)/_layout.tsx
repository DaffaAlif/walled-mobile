import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack, Tabs } from "expo-router";
import { Link } from "expo-router";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useRef } from "react";
import { Pressable, Animated, Modal, TouchableOpacity } from "react-native";
import { currentUser } from "@/api/api";
import { useSession } from "@/context/authContext";

type UserData = {
  email: string;
  fullname: string;
  password: string;
  phone_no: string;
  username: string;
};

const HomeLayout = () => {
  const profilePicture = require("@/assets/images/Profile.png");

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const [data, setData] = useState<UserData>({
    email: "",
    fullname: "",
    password: "",
    phone_no: "",
    username: "",
  });

  const { session } = useSession();
  console.log(data, "dengan token : ", session);

  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    if (session) {
      try {
        const response = await currentUser(String(session));
        const data = response;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [session]);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View style={styles.stackContainer}>
              <Pressable onPress={toggleModal}>
                <View style={styles.profileContainer}>
                  <Image source={profilePicture} style={styles.profilePic} />
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {data?.fullname}
                    </Text>
                    <Text style={{ fontWeight: "light" }}>
                      Personal Account
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Link href={"/(auth)/login"}>
                <Ionicons name="sunny-outline" size={38} color="#25292e" />
              </Link>
              <Modal
                transparent
                visible={modalVisible}
                animationType="fade"
                onRequestClose={toggleModal}
              >
                <TouchableOpacity
                  style={styles.overlay}
                  onPress={toggleModal}
                />
                <View style={styles.popupContainer}>
                  <Link href={"/(auth)/login"} style={styles.logoutButton}>
                    <Text
                      style={[
                        styles.popupText,
                        { textAlign: "center", color: "#FFFFFF" },
                      ]}
                    >
                      Logout
                    </Text>
                  </Link>
                </View>
              </Modal>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  stackContainer: {
    padding: 4,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    gap: 8,
    flex: 2,
    alignItems: "center",
  },

  profilePic: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#19918F",
    width: 60,
    height: 60,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  popupContainer: {
    position: "absolute",
    top: 80, // Adjust this to match the position below the profile picture
    left: "10%",
    right: "10%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  popupText: {
    fontSize: 16,
    marginVertical: 10,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
  },
});
