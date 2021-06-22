import React from 'react';
import {View,Text,Button} from 'native-base';
const Home = (props)=>{
    console.log(props)
    return(
        <View>
            <Text>
                Home
                
            </Text>
            <Button dark 
            onPress={
                ()=>{
                    props.navigation.push('details')
                }
            }>
                <Text>
                    navigate to details
                </Text>
            </Button>
        </View>
    )
}
export default Home