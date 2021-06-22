import React, { useContext, useEffect } from 'react';
import { View, Text, Container, Content,Card, CardItem ,Body,Icon} from 'native-base';
import {Image} from 'react-native'
import { context } from '../context/context'
import { getUserByID } from '../actions/users';
const UserDetails = ({ navigation, route }) => {
    const { state, dispatch } = useContext(context)
    console.log(state)
    const id = route.params.id
    console.log(id)
    useEffect(() => {
        const resolvePromise = async (action) => {
            dispatch(await action)
        }
        resolvePromise(getUserByID(id))

    }, [])
    if (state.details) {

        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>
                                {`${state.details.first_name} ${state.details.last_name}`}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image 
                                    style={{width:200,height:200,alignSelf:'center',borderRadius:50}} 
                                    source={{uri:state.details.avatar}}
                                />
                                <Text>
                                   Email: {state.details.email}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>
                                by reqres <Icon name="bookmarks"/>
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
    return <Text>
        plz wait ...
</Text>
}
export default UserDetails