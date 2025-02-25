import { View, Text, StyleSheet, Button, Pressable } from "react-native"
import { Link } from "expo-router"

export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
          Ian B. Dakila
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    child11: {
        width: 20,
        height: 20,
        backgroundColor: 'orange',
        borderRadius: 4
    },
    child12: {
        width: 20,
        height: 20,
        backgroundColor: 'pink',
        borderRadius: 4
    },
    container: {
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
        backgroundColor: '#ADD8E6',
    },
    child1: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'center',
        gap: 50,
        alignItems: 'center',
    },
    child2: {
        flex: 6,
        backgroundColor: 'red',
    },
    child3: {
        flex: 1,
        backgroundColor: 'blue',
    },
    text: {
        color: 'black',
        fontSize: 34
    }
})