import React from 'react';
import { View } from 'react-native';
import { List, Divider } from 'react-native-elements';

import DrawerLogo from '../DrawerLogo';
import scenes from '../../constants/scenesKeys';

import styles from '../../styles/NavigationDrawerStyles';
import InviteParticipant from './InviteParticipant';

import {
  goToScene,
  getLinkItem,
  getSceneTitle,
  getSceneIconName
} from './drawerHelpers';

const mainLinksBlock = [
  scenes.MAP,
  scenes.ORGANIZATION,
  scenes.DICTIONARIES
];
const profileLink = scenes.PROFILE;

const ProfilePageLink = ({ navigation }) => getLinkItem(
  getSceneTitle(profileLink),
  getSceneIconName(profileLink),
  () => goToScene(navigation, profileLink)
);

const ExitLink = () => getLinkItem(
  'Exit',
  'exit-to-app',
  () => console.log('Exit')
);

const renderLinkToScene = navigation => (sceneKey, i) => (
  <View key={i}>
    {getLinkItem(
      getSceneTitle(sceneKey),
      getSceneIconName(sceneKey),
      () => goToScene(navigation, sceneKey)
    )}
  </View>
);

const CustomDrawerContentComponent = ({ navigation }) => (
  <View style={styles.rootStyle}>
    <DrawerLogo />

    <List containerStyle={styles.linkListStyle}>
      {mainLinksBlock.map(renderLinkToScene(navigation))}
    </List>

    <Divider />

    <InviteParticipant />
    <ProfilePageLink navigation={navigation}/>
    <ExitLink />
  </View>
);

export default CustomDrawerContentComponent;