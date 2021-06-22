import React,{useState} from 'react';
import {View,Text,Button,Input,Form, Item, Left, Right} from 'native-base';
import {AddUser} from '../actions/users'
const Create = (props)=>{
    const[name,setname]=useState("");
    const[job,setjob]=useState("");
    var res;
    console.log(props)
    return(
        <View>

            <Form>
                <Item>
                    <Input 
                        style={{width:100,height:50}}
                        placeholder='write ur name here ya usr '
                        onChangeText={
                            (nm)=>{
                                setname(nm);
                            }
                        }
                        >
                    </Input>
                </Item>
                <Item>
                    <Input 
                        style={{width:100,height:50}}
                        placeholder='write ur job here ya usr '
                        onChangeText={
                            (jb)=>{
                                setjob(jb);
                            }
                        }
                        >
                    </Input>
                </Item>

                <Item>
                    <Button dark 
                    //style={{alignItems:Right}}
                        onPress={
                            
                            ()=>{
                                
                                const resolvePromise = async () => {
                                    
                                    res=await AddUser(name,job);

                                    console.log("res before :"+res.payload.name);
                                    //res=JSON.stringify(res.payload);

                                    //console.log("res is :"+res);

                                    alert("user  "+res.payload.name+"/n"+ 
                                    "  created with id = "+res.payload.id+"\n"+
                                    " at "+res.payload.createdAt);
                                    
                                    //alert(res.payload.id);
                                    props.navigation.push('home') 
                                }
                                resolvePromise()

                                

                                }
                                
                        }
                        >
                             
                        <Text>Add</Text>
                    </Button>

                </Item>
            
            
            </Form>
        </View>
    )
}
export default Create
