import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";

const ProfilePopup = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Simulating a Stack */}
      <View style={styles.header}>
        <Pressable onPress={toggleModal}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/1.jpg",
            }}
            style={styles.profileImage}
          />
        </Pressable>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.text}>This is the main content of the app.</Text>
      </View>

      {/* Pop-Up Modal */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <TouchableOpacity style={styles.overlay} onPress={toggleModal} />
        <View style={styles.popupContainer}>
          <Text style={styles.popupText}>View Profile</Text>
          <Text style={styles.popupText}>Edit Profile</Text>
          <Text style={styles.popupText}>Logout</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: 100,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popupContainer: {
    position: "absolute",
    top: 120, // Adjust this to match the position below the profile picture
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
});

export default ProfilePopup;
