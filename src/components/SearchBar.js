import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const SearchBar = ({zip, onZipChange, onZipSubmit}) => {
  return(
     <View style={styles.backgroundStyle}>
      <Fontisto name="search" style={styles.iconStyle}/>
       <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Search"
          value={zip}
          onChangeText={onZipChange}
          onEndEditing={onZipSubmit}
          />
  </View>
  )};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
