import { NavigationActions, DrawerActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function push(routeName, params) {
  navigator.dispatch(
    NavigationActions.push({
      routeName,
      params,
    })
  );
}

function goBack() {
  navigator.dispatch(NavigationActions.back());
}

function openDrawer() {
  navigator.dispatch(DrawerActions.openDrawer());
}

function getCurrentRoute() {
  const route = navigator && navigator.state.routeName;
  if (route) {
    return route;
  }
  return null;
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute,
  goBack,
  openDrawer,
  push,
};
