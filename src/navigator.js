//region References
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Dashboard from './screens/Dashboard';
import SideBar from './screens/Sidebar';
import Welcome from './screens/Welcome';
import AboutUs from './screens/AboutUs';
import test from './screens/test';


import OurPeople from './screens/OurPeople';

import Agreement from './screens/Agreement';
import AssitantScreen1 from './screens/Assistant/Screen1';
import AssitantScreen2 from './screens/Assistant/Screen2';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import FAQ from './screens/FAQ';
import ContactUs from './screens/ContactUs';

import Registration from './screens/Registration';
import MyAccount from './screens/MyAccount';
import MyAccountActions from './screens/MyAccountActions';
import Events from './screens/Events';
import Publications from './screens/Publications';
import Partners from './screens/Partners';


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
  MyAccountActions: {
    screen: MyAccountActions,
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
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null,
      headerMode: 'none',
      gesturesEnabled: false,
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerMode: 'none',
        gesturesEnabled: false,
      },
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

export const AuthStack = createStackNavigator(
  {
    Agreement: {
      screen: Agreement,
      navigationOptions: {
        headerMode: 'none',
        gesturesEnabled: false,
      },
    },
    AssitantScreen1: {
      screen: AssitantScreen1,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    AssitantScreen2: {
      screen: AssitantScreen2,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerMode: 'none',
        gesturesEnabled: false,
      },
    },
  },
  {
    headerMode: 'none',
    gesturesEnabled: false,
  },
);

export const AppNavigator = createSwitchNavigator(
  {
    App: Drawer,
    Auth: AuthStack,
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
