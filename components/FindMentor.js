import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, Button,Text } from 'react-native-elements';
import { TextInput, View, Picker } from 'react-native';
import Select from './Select';
import ModalDropdown from 'react-native-modal-dropdown';



export default function LoginFields({navigation}) {
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [role, setRole] = useState('');
    const [experience, setExperience] = useState('')

    const onCompanyChange = (index,value) => {
      setCompany(value)
    }

    const onRoleChange = (index,value) => {
      setRole(value)
    }

    const onYearsofExpChange = (index,value)=>{
      setExperience(value)
    }

    const onLocationChange = (index,value)=> {
      setLocation(value)
    }

    const onFindMentorPress = ()=> {
      //Pass filter conditions to Home
      const options = {
        company,
        role,
        experience,
        location
      }
      navigation.push('Home',{options})
    }

    const companyOptions = ['Amazon','Airbnb','Microsoft', 'Uber','Facebook','LinkedIn','Google','IBM','Twitter','Pinterest','Others']

    const roleOptions = ['Mobile App Engineer', 'Web App Engineer', 'Infrastructure Engineer'
     ,'Fullstack Engineer', 'Data Scientist', 'Bussiness Analyst', 'Human Resource', 'UI/UX Designer','Others']

    const locationOptions = ['Atlanta','Bay Area','Boston','Chicago','New York','Houston','Seattle','Others']
    const yearOptions = ['1- year', '1 ~ 3 years','3 ~ 5 years', '5 ~ 10 years', '10+ years']
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }}> 
                
          <Text style={{color:'#F5F5F5', margin:10, width:300}}>Company</Text>
          <ModalDropdown
            options={companyOptions}
            style={{color:'#F5F5F5', marginLeft:10}}
            onSelect={onCompanyChange}
          />
          <Text style={{color:'#F5F5F5', margin:10}}>Role</Text>
          <ModalDropdown
            options={roleOptions}
            style={{color:'#F5F5F5', marginLeft:10}}
            onSelect={onRoleChange}

          />

          <Text style={{color:'#F5F5F5', margin:10}}>Location</Text>
          <ModalDropdown
            options={locationOptions}
            style={{color:'#F5F5F5', marginLeft:10}}
            onSelect={onLocationChange}
          />

          <Text style={{color:'#F5F5F5', margin:10}}>Years of Experience</Text>
          <ModalDropdown
            options={yearOptions}
            style={{color:'#F5F5F5', marginLeft:10}}
            onSelect= {onYearsofExpChange}
          />
          <Button
            title="Find Mentor"
            style={{marginTop:30}}
            onPress={onFindMentorPress}
          />
        </View>
      );

}

