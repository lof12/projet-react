import React from "react";
import {Text,View,StyleSheet} from "react-native";

const CommandeScreen = () => {
    return (
        <View styles={styles.container}>
            <Text>Nouvelle commande</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
export default CommandeScreen;