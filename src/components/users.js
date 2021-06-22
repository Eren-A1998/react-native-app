import React, { useContext } from 'react';
import { View, Text, Button,Right,Left,Icon,ListItem } from 'native-base';
import { context } from '../context/context';
import { getUsers } from '../actions/users'
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useState } from 'react';
const Users = ({navigation}) => {
    const [ PGnum, setPGnum ] = useState(1)
    const { state, dispatch } = useContext(context)
    useEffect(() => {
        const resolvePromise = async () => {
            dispatch(await getUsers(PGnum))
        }
        resolvePromise()
    }, [PGnum])

    return (
        
        <FlatList
            data={state.list}
            renderItem={({ item }) => {
                return <ListItem>
                    <Left>
                        <Text>{item.first_name}</Text>
                    </Left>
                    <Right>
                        <Icon name="eye" onPress={
                            ()=>{
                                navigation.navigate('details',{id:item.id})
                            }
                        }/>
                    </Right>
                </ListItem>
            }

        }

        ListFooterComponent={
            ()=>{
                return(
                   <View style={{display:'flex',flexDirection:"row",justifyContent:"space-between" ,marginVertical:15}}>
                       <Button
                       style={{alignSelf:"flex-start",marginLeft:10}}
                       onPress={
                           ()=>{
                               setPGnum(PGnum+1);
                           }
                       }
                       >

                           <Text>Next</Text>
                       </Button>

                       <Text style={{alignSelf:"center"}}>{PGnum}</Text>

                       <Button
                        style={{alignSelf:"flex-end",marginRight:10}}
                       onPress={
                        ()=>{
                            setPGnum(PGnum-1);
                        }
                    }
                       >
                           <Text>Prev</Text>
                       </Button>
                   </View> 
                )
            }
        }
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={EmptyList}    
            
        />
    )
}
export default Users

const EmptyList = () => {
    return <Text style={{ textAlign: 'center' }}>
        No users available
    </Text>
}

const ItemSeparator= ()=>
{
    return (<ListItem itemDivider>
    </ListItem>  )
}
