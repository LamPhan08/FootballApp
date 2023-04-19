import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import moment from "moment";

const Article = (props) => {
    return (
        <SafeAreaView style = {styles.container}>
            <Image source={{
                uri: props.urlToImage
            }} style = {styles.image}/>

            <View style = {{padding: 10}}>
                {/* Title */}
                <Text style = {styles.title}>{props.title}</Text>

                {/* Description */}
                <Text style = {styles.description} numberOfLines = {3}>{props.description}</Text>
            
                <View style = {styles.data}>
                    <Text style = {styles.heading}>
                        by: <Text style = {styles.author}>{props.author}</Text>
                    </Text>

                    <Text style = {styles.date}>
                        {moment(props.publishedAt).format("MMM Do YY")}
                    </Text>
                </View>

                

            </View>

        </SafeAreaView>
    );
}

export default Article;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        borderColor: "#C5C5C5",
        borderWidth: 1,
        marginTop: 20,
    },
    image:{
        height: 200,
        width: "100%",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18
    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading:{

    },
    author:{
        fontWeight: "bold",
        fontSize: 15
    },
    date:{
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    },
})