import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <View flex-row items-center bg-dark-200 rounded-full px-5 py-4>
        <Text>SearchBar</Text>
      </View>
    )
  }
}