import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import farmersApi from '../api/farmersApi';

const SearchScreen = () => {
  const [zip, setZip] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try{
      const res = await farmersApi.get('/zipSearch', {
        params: {
          zip:''
        }
      });
      setResults(res.data.results)
      }catch (err){
        setErrorMessage('location not found')
    }
  };

  useEffect(() => {
    searchApi('10014');
  }, []);

  return (
  <View>
      <SearchBar
        zip={zip}
        onZipChange={setZip}
        onZipSubmit={() => searchApi(zip)}
        />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>
      We have found {results.length} results
    </Text>
  </View>
  )};

const styles = StyleSheet.create({});

export default SearchScreen;
