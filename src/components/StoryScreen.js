import * as React from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {showNavigationBar} from 'react-native-navigation-bar-color';
import R from '../res/R';
import AlertModal from './AlertModal';

const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

const StoryScreen = props => {
  useEffect(() => {
    showNavigationBar();
  }, []);

  return (
    <React.Fragment>
      <StatusBar
        barStyle={props.statusBarStyle ?? R.colors.barStyle}
        backgroundColor={props.statusBarColor ?? R.colors.appColor}
        translucent={false}
      />
      <SafeAreaView style={[styles.statusBar, props.statusBarIosStyle]} />
      <SafeAreaView style={styles.mainContainer}>
        <KeyboardAvoidingView
          style={styles.root}
          behavior={behavior}
          keyboardVerticalOffset={50}>
          {props.children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      {props.loading && (
        // <ActivityIndicator
        //   size="large"
        //   color={props.loaderColor ?? R.colors.appColor}
        //   style={styles.loader}
        // />
        <AlertModal
          visible={true}
          headingViewStyle={styles.headViewStyle}
          heading={'Loading...'}
          topTitle={'Please wait'}
          activityIndicator={true}
        />
      )}
      <SafeAreaView style={[styles.bottomBarIos, props.bottomBarIosStyle]} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flex: 0,
    backgroundColor: R.colors.darkAppColor,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  root: {
    flex: 1,
  },
  bottomBarIos: {
    flex: 0,
    backgroundColor: R.colors.white,
  },
  loader: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StoryScreen;
