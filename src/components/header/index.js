import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../img/logo.png')}
                        />
                    </TouchableOpacity>


                    <View style={styles.iconView}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../img/ShareIcon.png')}
                                style={{ width: 35, height: 35 }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60
    },
    header: {
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 1,
        marginTop: 20
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    feed: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});
