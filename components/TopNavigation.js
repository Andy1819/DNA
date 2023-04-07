import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TopNavigation = ({index, setIndex}) => {
  return (
    <View style={{...styles.container, backgroundColor: "#ffd700"}}>
      {index===0 ?(
      <TouchableOpacity style={styles.left}>
        <Text style={{...styles.text, color: "lightgrey"}}>
            <MaterialCommunityIcons
                name="theme-light-dark"
                size={40}
                color="#2d2d30"
            />
        </Text>
      </TouchableOpacity>
    ):(<></>)
      }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
      },
      text: {
        fontSize: 16,
      },
      left: {
        flexDirection: "row",
        alignItems: "center",
        width: 80,
        justifyContent: "space-between",
      }
})
export default TopNavigation;