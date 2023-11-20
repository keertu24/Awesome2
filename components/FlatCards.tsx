import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View  style={styles.flexRow}>
        <View style={[styles.card,styles.cardOne]}>
          <Text >Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text >Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text >Yellow</Text>
        </View>
        
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal:10
  },
  card: {
    width:100,
    height:100,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    margin:7,
    borderRadius:6

  },
  cardOne:{
    backgroundColor:'red'
  },
  flexRow:{
    flex:1,
    flexDirection:'row'
  }
  ,
  cardTwo:{
    backgroundColor:'blue'
  },
  cardThree:{
    backgroundColor:'yellow'
  }
})