import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { Text, TextInput, View, Alert } from 'react-native';



export default function LoginFields() {
    const [state, setState] = useState({email: '', password: ''})

    const onHandleEmailChange = (event) => {
        setState({'email':event.target.value})
    }

    const onHandlePwdChange = (event) => {
        setState({'password':event.target.value})
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start'
            }}>
            
          <TextInput
            style={{height: 40, width: 300}}
            placeholder="Email"
            onChange={onHandleEmailChange}
            value={state.email}
          />
          <TextInput
            style={{height: 40}}
            placeholder="Password"
            secureTextEntry={true}
            onChange={onHandlePwdChange}
            value={state.password}
          />
          <Button
            title="Login"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      );

}

