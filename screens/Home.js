import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Button } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';

import app from '../db';
import argonTheme from "../constants/Theme";

const { width } = Dimensions.get('screen');
db = app.database();


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      selectedMentors:[],
    };
    this.handleChange = this.handleChange.bind(this);
  };
  

  handleChange = () => {
    const filteredMentor = [];
    db.ref('mentors/').on('value', snap =>{
      const allMentor = snap.val();
      console.log("response", allMentor);
      this.setState({ selectedMentors: allMentor });
    })
    //this.setState({selectedMentors:[sdada]})
    //this.state.selectedMentors
  }

  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          {this.state.selectedMentors.map((m, key) => 
            <Card key={key} item={m} horizontal />)}
        </Block>
      </ScrollView>
    )
  }

  render() {
    const { filterOptions } = this.props;
    const { selectedMentors } = this.state;
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
        <Button
          style={styles.button}
          color={argonTheme.COLORS.SECONDARY}
          onPress={this.handleChange}
          textStyle={{ color: argonTheme.COLORS.BLACK }}
        >
          Get Mentorlist
        </Button>
      </Block>
      
    );
  }
}

Home.propTypes = {
  filterOptions: PropTypes.object,
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
});

export default Home;


//<Block flex row>