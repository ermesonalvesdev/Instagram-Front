import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.footer}>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity>
                            <Image
                                 style={{width: 40, height: 40, marginLeft: 30}}
                                source={require('../../img/HomeIcon.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                 style={{width: 40, height: 40, marginLeft: 30}}
                                source={require('../../img/SearchIcon.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                 style={{width: 40, height: 40, marginLeft: 30}}
                                source={require('../../img/PlusIcon.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                style={{width: 50, height: 50, marginLeft: 30}}
                                source={require('../../img/RellsIcon.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                style={{ width: 40, height: 40, marginLeft: 30, borderRadius: 20,}}
                                source={{ uri: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png' }}
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
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    footer: {
        height: 60,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderTopWidth: 0.2,
        shadowColor: '#000',
        elevation: 1,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10

    },
});
