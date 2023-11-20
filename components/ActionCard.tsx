import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>

                    <Text style={styles.headerText}>
                        What's yout name bois?
                    </Text>
                </View>
                <Image source={{
                    uri: 'https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/15/607285143c6f3fa9671daf910a2d9262167378687009024_original.jpeg?impolicy=abp_cdn&imwidth=650'
                }} style={styles.cardImage} />


                <View style={styles.cardBody}>
                    <Text numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatem reiciendis cum dolorem in ex fuga, pariatur necessitatibus fugiat? Hic dolorum nulla enim laboriosam autem saepe veritatis quisquam. Quas eligendi quod dignissimos quis! Asperiores. </Text>
                </View>
                <View style={styles.cardFooter}>
                    <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
                        <Text>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.socialLinks} onPress={() => openWebsite('https://instagram.com/keerthan06')}>
                        <Text>Instagram</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    card: {
        height: 360,
        width: 350,
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 10,
        padding: 2
    },
    elevatedCard: {
        backgroundColor: '#F4511E',
        elevation: 4,
        shadowOffset: {
            height: 1,
            width: 1
        }, shadowColor: '#456788',
        shadowOpacity: 1
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems:'center'
    },
    headerText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '700'
    },
    cardImage: {
        height: 200
    },
    cardBody: {
        padding:12
    },
    cardFooter: {
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
        
    },
    socialLinks:{
        fontSize:16,
        color:'black',
        backgroundColor:'white',
        paddingHorizontal:16,
        paddingVertical:6,
        
        borderRadius:7
    }

})