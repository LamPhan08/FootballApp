import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import Article from '../../components/Article';
import axios from 'axios';

const Home = () => {
    const [articles, setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/everything?domains=skysports.com&sortBy=publishedAt&apiKey=1d1e5fee368f4609b657d30e24f7921d', {
            // params: {
            //     category: "sports"
            // }
        })
            .then((response) => {
                // xử lý khi thành công
                // console.log(response.data.articles);
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                // xử lý khi bị lỗi
                console.log(error);
            })
            .finally(function () {
                // luôn luôn được thực thi
            });
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <SafeAreaView>
            <FlatList data={articles} renderItem = {({item}) => 
                <Article
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description = {item.description}
                    author = {item.author}
                    publishedAt = {item.publishedAt}
                    />}
                keyExtractor = {(item) => item.url}
            />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {

    }
})