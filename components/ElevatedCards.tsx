import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal alwaysBounceHorizontal style={styles.container}>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text>Tap1</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text>Tap2</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text>Tap3</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text>Tap4</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text>Tap5</Text>
                </View>
                <View style={[styles.card, styles.elevatedCards]}>
                    <Text>Tap6</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:4,
        borderRadius:8

    },
    container: {
        padding: 8
    },
    elevatedCards: {
        backgroundColor: '#757575',
        elevation:40,
        shadowOffset:{
            width:10,
            height:10
        },
        shadowColor:'red'
    }
})