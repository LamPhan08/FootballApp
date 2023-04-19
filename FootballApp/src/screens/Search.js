import React, { useState } from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../../components/SearchBar";
import Article from '../../components/Article';
import axios from 'axios';

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [articles, setArticles] = useState([]);

    const searchArticles = () => {
        axios.get('https://newsapi.org/v2/everything?domains=skysports.com&sortBy=publishedAt&apiKey=1d1e5fee368f4609b657d30e24f7921d', {
            params: {
                q: searchText
            }
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

    return (
        <View>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit = {searchArticles}/>
            <FlatList
                data={articles}
                renderItem={({ item }) =>
                    <Article
                        urlToImage={item.urlToImage}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        publishedAt={item.publishedAt}
                    />}
                keyExtractor = {(item) => item.url}
            />
        </View>
    )
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});