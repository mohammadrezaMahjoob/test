import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class Friends extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Add friends here!</Text>
                {
                    this.props.screenProps.possibleFriends.map((item , key)=>(
                            <Button
                                key = {key}
                                title = {item.name}
                                onPress={() =>
                                    this.props.screenProps.addFriend(key)
                                }
                            />
                        )
                    )
                }

                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
