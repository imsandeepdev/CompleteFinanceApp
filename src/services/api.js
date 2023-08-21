import {store} from '../store';
import {Config} from '../config';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import NavigationService from '../navigator/NavigationService';

const multiGetRequest = ({url}) =>
  new Promise((resolve, reject) => {
   
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    const requestUrl = Config.API_URL + url;
    console.log('HEADER=>>', headers,"Req URL=>",requestUrl);

    axios
      .get(requestUrl, {headers})
      .then(response => {
        console.log('AXIOS GET RESPONSE ON API', response);
        if (response.status == '200') {
          resolve(response.data);
        } else if (response.status == 401) {
          NavigationService.reset('LoginScreen');
          reject(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch(error => {
        reject(error);
        console.log('ERROR==>', error);
        if (error.message === 'Network request failed') {
          Toast.show('Check Internet Connection', Toast.SHORT);
        } else if (error.message == 'Request failed with status code 401') {
          NavigationService.reset('LoginScreen');
        }
      });
  });

const multipartRequest = ({url, needAuth, formData, hideLoader = false}) =>
  new Promise((resolve, reject) => {
   
    const headerWithoutAuth = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    const headers = headerWithoutAuth;
    const requestUrl = Config.API_URL + url;
    console.log('Request params ==> ', formData, ' ==> ', requestUrl);

    axios
      .post(requestUrl,formData, {headers})
      .then(response => {
        console.log('AXIOS RESPONSE ON API', response);
        if (response.status == '200') {
          resolve(response.data);
        } else if (response.status == 401) {
          NavigationService.reset('LoginScreen');
          reject(response.data);
        } else {
          Toast.show(response.data.message, Toast.SHORT);
          reject(response.data);
        }
      })
      .catch(error => {
        reject(error);
        console.log('errorr==>', error);
        if (error == 'Network Error') {
          Toast.show('Check Internet Connection', Toast.SHORT);
        } else {
          Toast.show(error.message, Toast.LONG);
        }
      });
  });

  const multipostRequest = ({url, needAuth, data, hideLoader = false}) =>
    new Promise((resolve, reject) => {
      const headerWithoutAuth = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      const headers = headerWithoutAuth;
      const requestUrl = Config.API_URL + url;
      console.log('Request params ==> ', data, ' ==> ', requestUrl);

      axios
        .post(requestUrl, data,{headers})
        .then(response => {
          console.log('AXIOS RESPONSE ON API', response);
          if (response.status == '200') {
            resolve(response.data);
          } else if (response.status == 401) {
            NavigationService.reset('LoginScreen');
            reject(response.data);
          } else {
            Toast.show(response.data.message, Toast.SHORT);
            reject(response.data);
          }
        })
        .catch(error => {
          reject(error);
          console.log('errorr==>', error);
          if (error == 'Network Error')
          {
            Toast.show('Check Internet Connection', Toast.SHORT);
          }
          else
          {
            Toast.show(error.message, Toast.LONG);
          }
        });
    });


export default {
  multipartRequest,
  multiGetRequest,
  multipostRequest
};
