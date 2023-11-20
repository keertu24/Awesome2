import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending     Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_R9FFDbbmsMzxMBoeFSAZ3YEO4eu44AsIqTNRB5V8g&s'}}
        style={styles.cardImage} fadeDuration={4000}
        />
        <View style={styles.cardBody}>
            <Text style={[styles.cardTitle,styles.whiteText]}>PhotoGraphy</Text>
            <Text style={[styles.cardLabel,styles.whiteText]}>PhotoGraphy</Text>
            <Text style={[styles.cardDesc,styles.whiteText]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem cumque debitis sequi ratione, quia, id magnam, quo ex facere labore dolorem blanditiis.</Text>
            <Text style={[styles.cardFooter,styles.whiteText]}>PhotoGraphy</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        margin:8,
        width:350,
        height:380,
        borderRadius:15

    },
    cardElevated:{
        backgroundColor:'#000000',
        elevation:3,
        shadowOffset:{
            width:10,
            height:10
        },
        shadowColor:"#000000"
    },
    cardImage:{
        height:200,

    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
        padding:5,
        flexShrink:1
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        flexGrow:1,
        flexShrink:1
    },
    cardDesc:{
        fontSize:14,
        flexGrow:1
    },
    cardLabel:{
        fontSize:16,
        flexShrink:1
    },
    cardFooter:{},
    whiteText:{
        color:'#FFFFFF'
    }
})