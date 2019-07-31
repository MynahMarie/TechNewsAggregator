import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { getNews } from '../getNews';
import Article from './Article';
import config from '../config';

export default class Screen extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    articles: [],
    refreshing: true,
    input: ''
  };

  componentDidMount() {
    this.fetchNews(this.props.keyword, null);
  }

  fetchNews = (keyword, date) => {
    getNews(keyword, date)
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }))
  }

  handleChangeText = text => {
    this.setState({ input: text });
  }

  handleDateSubmit = () => {
    const date = this.state.input;
    const regexp = new RegExp(/^\d{4}-\d{2}-\d{2}$/g);
    if (date.length > 0) {
      if (regexp.test(date)) {
        this.setState({ refreshing: true });
        this.fetchNews(this.props.keyword, date);
      }
      else {
        alert('Please enter a valid date.')
      }
    }
  }

  render() {
    return (
      <View>
      <Header
        leftComponent={
          <Text style={{ color: 'white', fontSize: 16 }}>Hi {config.NAME}!</Text>
        }
        centerComponent={
          <TextInput style={{ backgroundColor: 'white', borderRadius: 3 }}
            value={this.state.input}
            placeholder='From YYYY-MM-DD'
            onChangeText={this.handleChangeText}
            onSubmitEditing={this.handleDateSubmit}
          />
        }
        rightComponent={
          <Image
            source={require('../assets/E+A-Logo.png')}
            style={{ width: 45, height: 45 }}
          />
        }
        containerStyle={{ backgroundColor: 'black', paddingBottom: 15 }}
      />
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={() => this.fetchNews}
      />
      </View>
    )
  }
}
