import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Linking } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class Article extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const defaultImg = 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Diamond-Pattern-Backgrounds-768x480.png';
    const {
      title,
      description,
      publishedAt,
      urlToImage,
      source,
      url
    } = this.props.article;

    const time = moment(publishedAt || moment.now()).fromNow();
    return (
    			<TouchableHighlight onPress={() => Linking.openURL(url)}>
    				<Card
    					featuredTitle={title}
    					featuredTitleStyle={styles.featuredTitleText}
    					image={{ uri: urlToImage || defaultImg }}
    				>
    					<Text style={{ marginBottom: 10 }}>
    						{description || 'Read more...'}
    					</Text>
    					<Divider style={{ backgroundColor: '#dfe6e9' }} />
    					<View
    						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
    					>
    						<Text
    							style={styles.footnoteText}
    						>
    							{source.name.toUpperCase()}
    						</Text>
    						<Text
    							style={styles.footnoteText}
    						>
    							{time}
    						</Text>
    					</View>
    				</Card>
    			</TouchableHighlight>
    		);
    	}
}

const styles = StyleSheet.create({
  featuredTitleText: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  footnoteText: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  }
})
