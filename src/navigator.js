//region References
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideBar from './screens/Sidebar';
import Welcome from './screens/Welcome';
import AboutUs from './screens/AboutUs';


import OurPeople from './screens/OurPeople';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import FAQ from './screens/FAQ';
import ContactUs from './screens/ContactUs';

import Registration from './screens/Registration';
import MyAccount from './screens/MyAccount';
import Events from './screens/Events';
import Publications from './screens/Publications';
import Partners from './screens/Partners';
import Gallery from './screens/Gallery';


const NavigationsRoutes = {
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  Registration: {
    screen: Registration,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  OurPeople: {
    screen: OurPeople,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  ContactUs: {
    screen: ContactUs,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  Partners: {
    screen: Partners,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  Publications: {
    screen: Publications,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  MyAccount: {
    screen: MyAccount,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  Events: {
    screen: Events,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
  FAQ: {
    screen: FAQ,
    navigationOptions: {
      headerMode: 'none',
      gesturesEnabled: false,
    },
  },
};


const Drawer = createDrawerNavigator(NavigationsRoutes, {
  initialRouteName: 'Welcome',
  overlayColor: '#0000002e',
  contentComponent: props => <SideBar {...props} />,
});
Drawer.navigationOptions = {
  header: null,
};

export const AppNavigator = createSwitchNavigator(
  {
    App: Drawer,
  },
  {
    initialRouteName: 'App',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export const AppContainer = createAppContainer(AppNavigator);
