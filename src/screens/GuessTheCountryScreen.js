import React, {useState, useEffect}from 'react';
import {countryList, objectNameList, objectImageList } from '../../data/Data.js'
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';


const GuessTheCountryScreen = () => {
    const [answer, setAnswer] = useState('')
    const [index, setIndex] = useState()
    const [result, setResult] = useState('')
    
    const randomIndex = () => {
        const pickRandomIndex = Math.floor(Math.random() * countryList.length)
        setIndex(pickRandomIndex)
    }
    const checkAnswer = () => {
        if (answer === countryList[index]) {
            setResult('true')
        }else{
            setResult('false')
        }
        randomIndex()
    }
    useEffect(() => {
        randomIndex()
    }, [])
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{textDecoration: 'underline', fontSize: 28, fontFamily: 'serif', marginBottom: 16}}>
                Guess The Country
            </Text>
            <Image style={{width: 250, height: 250, borderRadius: 10}} source={{uri: objectImageList[index]}}  /> 
            <View style={{margin: 8, backgroundColor: 'lavender', padding: 4, borderWidth: 1}}>
                <Text style={{fontSize: 18}} >{objectNameList[index]}</Text>
            </View>
            <View style={{flexDirection: 'row', margin: 8}}>
                <TextInput style={{borderWidth:1, width: '50%'}} placeholder="Write Your Answer" keyboardType='default' onChangeText = {(text) => setAnswer(text)} />
                <TouchableOpacity style={{
                    borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 8, marginLeft: 8, marginBottom: 8, marginTop: 8, borderColor: 'skyblue'
                }} onPress={() => checkAnswer()}>
                    <Text style={{fontSize: 18}}>Submit</Text>
                </TouchableOpacity>
            </View>
            <Text>{countryList[index]}</Text>
            <Text>{result}</Text>
        </View>
    )
}

export default GuessTheCountryScreen