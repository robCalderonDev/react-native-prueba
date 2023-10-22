import React from 'react'
import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

const RepositoryItemHeader = (repo) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />

            </View>
            <View style={{ flex: 1 }}>
                <StyledText fontSize='subheading' fontWeight='bold'>FullName{repo.fullName}</StyledText>
                <StyledText color='secondary'>Description:{repo.description}</StyledText>
                <StyledText style={styles.language} >{repo.language}</StyledText>
            </View>

        </View>
    )
}


const RepositoryItem = (repo) => {
    return (
        <View key={repo.id} style={styles.container}  >
            <RepositoryItemHeader {...repo} />
            <RepositoryStats {...repo} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginVertical: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4

    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    }
})

export default RepositoryItem