import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    };
    this.liked = this.liked.bind(this)
    this.ViewLike = this.ViewLike.bind(this)
    this.likeFt = this.likeFt.bind(this)
  }

  liked() {
    const feed = this.state.feed

    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      })
    }else{
      this.setState({
        feed:{
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
      })
    }
  }

  likeFt(likeada){
    return likeada ? require('/Users/ermesonalves/Documents/instagram/src/img/likeada.png') :
    require('/Users/ermesonalves/Documents/instagram/src/img/LikeIcon.png')
  }

  ViewLike(likers){
    const feed = this.state.feed

    if (feed.likers <= 0) {
      return;
    }
    return(
      <Text>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  render() {
    return (
      <ScrollView alwaysBounceVertical={true} alwaysBounceHorizontal={false}>

        {/* <ScrollView
          alwaysBounceHorizontal={true}
          alwaysBounceVertical={false}>
          <View style={styles.story}>
            <TouchableOpacity>
            <View style={styles.profileStory}>
            <Image
              source={{ uri: this.state.feed.imgperfil }}
              style={styles.ftStory}
            />
          </View>
            </TouchableOpacity>
          </View>
        </ScrollView> */}


        <View style={styles.feed}>
          <View style={styles.profile}>
            <Image
              source={{ uri: this.state.feed.imgperfil }}
              style={styles.ftProfile}
            />
            <Text style={{ marginLeft: 10, fontSize: 20 }}> {this.state.feed.nome} </Text>
          </View>

          <Image
            source={{ uri: this.state.feed.imgPublicacao }}
            style={styles.ftPublic}
          />

          <View style={styles.icons}>
            <TouchableOpacity onPress={this.liked}>
              <Image
                style={{ width: 35, height: 35, marginRight: 5 }}
                source={this.likeFt(this.state.feed.likeada)}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 35, height: 35, marginRight: 5 }}
                source={require('/Users/ermesonalves/Documents/instagram/src/img/CommentIcon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 35, height: 35, marginRight: 220}}
                source={require('/Users/ermesonalves/Documents/instagram/src/img/ShareIcon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 35, height: 35 }}
                source={require('/Users/ermesonalves/Documents/instagram/src/img/SaveIcon.png')}
              />
            </TouchableOpacity>
            </View>

            <View style={styles.likersView}>
            {this.ViewLike(this.state.feed.likers)}
            </View>

          <View style={{marginLeft: 30, fontSize: 14}}>
            <Text style={{fontWeight: 'bold'}}>  </Text>
          </View>

          <View style={styles.textPost}>
            <Text style={{ fontWeight: 'bold' }}>@{this.state.feed.nome} </Text>
            <Text> {this.state.feed.descricao} </Text>
          </View>

        </View>

      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
  feed: {
    justifyContent: 'center',
  },
  ftPublic: {
    width: 420,
    height: 420,
  },
  textPost: {
    textAlign: 'left',
    marginLeft: 21,
    marginBottom: 10,
    flexDirection: 'row'
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    marginLeft: 16
  },
  ftProfile: {
    height: 50,
    width: 50,
    borderRadius: 35,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    marginLeft: 16
  },
  story: {
    height: 100
},
profileStory: {
  padding: 5,
},
ftStory: {
  width: 80,
  height: 80,
  borderWidth: 2,
  borderColor: '#000',
  margin: 10,
  borderRadius: 40,
  marginLeft: 16,
},
likersView: {
  marginLeft: 30,
  fontSize: 14
}
});