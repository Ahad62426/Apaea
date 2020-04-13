import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Container, Title } from 'native-base';
import CommonStyles, {
  DynamicP,
  DynamicM,
  TColors
} from '../../components/Styles';
import CstHeader from '../Headers';
import { DrawerActions } from 'react-navigation-drawer';

import { connect } from 'react-redux';
import { CLogo, LoadingButton, } from '../../components/Utilities';
import { CCarousel } from '../../components/Carousel';
import { customisedAction } from '../../redux/actions';
import { GET_BOARDING_DATA, GET_BOARDING_IMAGES } from '../../constants';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  _takeMeTOLogin = () => { this.props.navigation.navigate('SignIn'); };

  _takeMeTOSignUp = () => { this.props.navigation.navigate('SignUp'); };

  render() {
    const { user, loadingData, loadingImages, sliderData, sliderImages, customisedAction } = this.props;
    return (
      <Container
        style={[
          DynamicP(0, 0, 0, 0),
          {
            justifyContent: 'space-between',
          },
        ]}>
          <NavigationEvents onDidFocus={() => {
            if (!loadingData && !sliderData) customisedAction(GET_BOARDING_DATA);
            if (!loadingImages && !sliderImages) customisedAction(GET_BOARDING_IMAGES);
          }} />
        <CstHeader
          isMenuRight={true}
          noBackButton={true}
          OpenMenu={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          Screen={'Welcome to A-PAEA'}
        />
          <View
            style={[
              {
                backgroundColor: TColors.bgSecondary,
                flex: 1,
              },
              CommonStyles.vhc,
              DynamicP(20, 20, 20, 20),
            ]}>
            <View style={[{ flex: 2 }, CommonStyles.vchb]}>
              <CLogo height={100} width={100} />
            </View>
            {loadingData || loadingImages ?
              <View style={[{ flex: 1 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
                <ActivityIndicator style={{ marginTop: 20 }} size="large" color="white" />
              </View>
              : sliderData && sliderData.length && sliderImages && sliderImages.length ?
                <View style={[{ flex: 6 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
                  <View style={[{ flex: 3 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
                    <CCarousel
                      list={sliderImages}
                      callback={ProductID => this._getProduct(ProductID)}
                      type={"image-slider"}
      
                    />
                  </View>
                  <View style={[{ flex: 3, }, CommonStyles.vthc, DynamicM(5, 10, 0, 0)]}>
                    <CCarousel
                      list={sliderData}
                      callback={ProductID => this._getProduct(ProductID)}
                      type={"text-slider"}
                    />
                  </View>
                </View>
              : <View style={[{ flex: 1 }, CommonStyles.vthc, DynamicM(10, 5, 0, 0)]}>
                  <Title style={{ fontSize: 18 }}>Slider data not available!</Title>
                </View>
            }
            {user ? null :
              <View style={[{ flex: 2, width: "80%" }, CommonStyles.vchb]}>
                <LoadingButton
                  isBlock={true}
                  submitting={false}
                  rounded={true}
                  loaderColor={'white'}
                  textColor={"white"}
                  btnText={'Login'}
                  style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.primaryColor }]}
                  callback={() => this._takeMeTOLogin()}
                />
                <LoadingButton
                  isBlock={true}
                  submitting={false}
                  rounded={true}
                  textColor={"white"}

                  loaderColor={'white'}
                  btnText={'Create Account'}
                  style={[DynamicM(10, 5, 0, 0), { backgroundColor: TColors.bgSecondary, borderColor: "white", borderWidth: 1 }]}
                  callback={() => this._takeMeTOSignUp()}
                />
              </View>
            }
          </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ boardingDataReducer: { loadingData, loadingImages, sliderData, sliderImages }, sessionReducer: { user } }) => ({
  loadingData, loadingImages, sliderData, sliderImages,
  user
});

export default connect(mapStateToProps, { customisedAction })(SignIn);
