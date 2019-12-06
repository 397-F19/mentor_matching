import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Icon
} from "react-native";
import { Block, Text, theme, Button } from "galio-framework";
const { height, width } = Dimensions.get("screen");

import Images from "../constants/Images";
import FindMentor from "../components/FindMentor";
import argonTheme from '../constants/Theme';


class Onboarding extends React.Component {

  constructor(props) {
    super(props); 
      this.state = {
        selectPage: true,
      };
      this.handleClickFindMentor = this.handleClickFindMentor.bind(this);
      this.handleClickAddProfile = this.handleClickAddProfile.bind(this);
    };

  handleClickFindMentor = () => {
    console.log("handleClickFindMentor")
    this.setState({ selectPage: true })
  }

  handleClickAddProfile = () => {
    console.log("handleClickAddProfile")
    this.setState({ selectPage: false})
  }

  renderOptions = () => {
      const { navigation, optionLeft, optionRight } = this.props;
  
      return (
        <Block row style={styles.options}>
          <Button shadowless title="press" style={[styles.tab, styles.divider]} onPress={this.handleClickFindMentor}>
            <Block row middle>
              <Text size={18} style={styles.tabTitle}>{'Find Mentor'}</Text>
            </Block>
          </Button>
          <Button shadowless style={styles.tab} onPress={this.handleClickAddProfile}>
            <Block row middle>
              <Text size={18} style={styles.tabTitle}>{'Add Profile'}</Text>
            </Block>
          </Button>
        </Block>
      );
    }

/* <Block center>
          {this.renderOptions()}
        </Block> */

  render() {
    const { navigation } = this.props;

    return (
      
      <Block flex style={styles.container}>
       
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block center>
                { this.state.selectPage ?
                <FindMentor navigation={navigation}/> :
                null
                }
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.TRANSPARENT
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 100,
    height: 30,
    zIndex: 1,
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  },
  options: {
    marginBottom: 20,
    marginTop: 20,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: theme.COLORS.ICON,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
  },
});

export default Onboarding;
