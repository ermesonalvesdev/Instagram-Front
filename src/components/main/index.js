import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Lista from './list'


export default class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //API
            feed: [
                {
                    id: '1',
                    nome: 'Lucas Silva',
                    descricao: 'O que é UI Design ?',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/wp-content/uploads/2020/12/uiDesign-1-1536x864.png',
                    likeada: false,
                    likers: 0
                },
                {
                    id: '2',
                    nome: 'Matheus',
                    descricao: 'Qual o Melhor computador para programar?',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/wp-content/uploads/2018/12/qualpc.png',
                    likeada: false,
                    likers: 2
                },
                {
                    id: '3',
                    nome: 'Jose Augusto',
                    descricao: 'Criando input de senha com React Native',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/wp-content/uploads/2021/03/thumb-video-venda-1536x864.png',
                    likeada: false,
                    likers: 3
                },
                {
                    id: '4',
                    nome: 'Gustavo Henrique',
                    descricao: 'E-book Grátis Front-end como começar?',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/wp-content/uploads/2021/07/posthumb-1536x864.png',
                    likeada: false,
                    likers: 1
                },
                {
                    id: '5',
                    nome: 'Guilherme',
                    descricao: '8 Livros que recomendo você ler!',
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
                    imgPublicacao: 'https://sujeitoprogramador.com/wp-content/uploads/2021/01/thumbs-books-1536x936.jpg',
                    likeada: false,
                    likers: 32
                }
            ]
        };

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.feed}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={this.state.feed}
                        renderItem={({ item }) => <Lista data={item} />}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 8
    },
    header: {
        height: 60,
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
    send: {
        width: 23,
        height: 23,
    },
    feed: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
