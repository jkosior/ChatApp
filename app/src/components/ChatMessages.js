import React, { Component } from 'react';
import { Animated, Text, FlatList, RefreshControl, Platform, Keyboard, Dimensions, KeyboardAvoidingView } from 'react-native';

export default class extends Component {

    state = {
        refreshing: false,
        screen: Dimensions.get('screen').height,
        listHeight: new Animated.Value(
            Dimensions.get('screen').height - 90 - 55
        )
    }

    componentWillMount() {
        if (Platform.OS === 'ios') {
            this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardVisible);
            this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHidden);
        } else {
            this.keyboardWillShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardVisible);
            this.keyboardWillHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHidden);
        }
    }

    componentWillUnmount() {
         this.keyboardWillShowListener.remove();
         this.keyboardWillHide.remove();
    }

    keyboardVisible = e => {
        this.setState({
            listHeight: this.state.screen - e.endCoordinates.height - 90 - 55
        })
    }

    keyboardHidden = () => {
        this.setState({
            listHeight: this.state.screen - 90 - 55
        })
    }

    _keyExtractor = (item, index) => index.toString()

    _scrollDown = () => this.FlatList.scrollToEnd()

    _refreshControl = () => {
        return (
            <RefreshControl
                onRefresh={this.refresh}
                refreshing={this.state.refreshing}
            />
        )
    }

    data = () => {
        const arr = Array.from(Array(50).keys());
        return arr
    }

    refreshing = () => {
        this.setState({ refreshing: true })
        setTimeout(
            () => this.setState({ refreshing: false }),
            5000
        )
    }

    renderItem = ({item}) => {
        return <Text> {item} </Text>
    }

    refresh = () => {
        console.log("refreshed")
    }

    render () {
        return (
            <Animated.View style={{height: this.state.listHeight}}>
                <FlatList
                    data={this.data()}
                    ref={ref => this.FlatList = ref}
                    onLayout={this._scrollDown}
                    onContentSizeChange={this._scrollDown}
                    renderItem={this.renderItem}
                    keyExtractor={this._keyExtractor}
                    refreshControl={this._refreshControl()}
                />
            </Animated.View>
        )
    }
}
