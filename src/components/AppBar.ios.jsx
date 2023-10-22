import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import theme from '../theme'
import { Link, useMatch } from 'react-router-native'

import { TouchableWithoutFeedback } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        paddingTop: Constants.statusBarHeight + 10,

        flexDirection: 'row'
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    scrollViewContent: {
        minHeight: 1, // Ajusta la altura mínima según tus necesidades
    },
    scroll: {
        paddingBottom: 15
    }
})

const AppBarTab = ({ children, to }) => {
    const isActive = useMatch(to); // Verifica si la ruta actual coincide con 'to'


    const activeStyle = {
        color: isActive ? (theme.appBar.textPrimary) : theme.appBar.textSecondary,

        // Color diferente para la ruta activa
    };

    return (

        <Link to={to} >

            <StyledText style={[styles.text, activeStyle]}>

                {children}
            </StyledText>

        </Link>

    );
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView Style={styles.scrollViewContent} horizontal style={styles.scroll}  >
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>





                {/* Agrega más AppBarTabs según sea necesario */}
            </ScrollView>


        </View>
    )
}

export default AppBar