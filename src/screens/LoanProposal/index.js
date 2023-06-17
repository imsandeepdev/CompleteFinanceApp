import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable,SafeAreaView,Dimensions,ScrollView} from 'react-native';
import { Header, StoryScreen } from '../../components';
import style from './style';
import AppContent from '../../utils/AppContent';
import R from '../../res/R';
import IncomeDetail from './IncomeDetail';
import MonthlyExpenses from './MonthlyExpenses';
import LoanProposalForm from './LoanProposal';
const screenWidth = Dimensions.get('screen').width;


const LoanProposal = (props) => {

    const [selectedHeader, setSelectedHeader] = useState(0);
    const [monthlyIncome, setMonthlyIncome] = useState('')


    return (
      <StoryScreen>
        <SafeAreaView style={style.mainView}>
          <Header
            onPress={() => props.navigation.goBack()}
            leftSource={R.images.backIcon}
            title={'Loan Proposal'}
          />
          <View style={style.mainView}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {AppContent.LoanProposalHeader.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => setSelectedHeader(index)}
                    key={index}
                    style={{
                      height: R.fontSize.Size40,
                      width: screenWidth / 3,
                      backgroundColor:
                        index == selectedHeader
                          ? R.colors.appColor
                          : R.colors.placeHolderColor,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: R.fontSize.Size4,
                      borderLeftWidth: index != 0 ? 1.2 : 0,
                      borderColor: R.colors.lightWhite,
                    }}>
                    <Text
                      style={{
                        fontFamily: R.fonts.regular,
                        fontSize: R.fontSize.Size12,
                        fontWeight: '600',
                        textAlign: 'center',
                        color:
                          index == selectedHeader
                            ? R.colors.textPriColor
                            : R.colors.lightWhite,
                      }}>
                      {item.title}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View style={style.mainView}>
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={{flex: 1, marginHorizontal: R.fontSize.Size20}}>
                  {selectedHeader == 0 && (
                    <View style={{flex: 1}}>
                      <IncomeDetail nextOnPress={() => setSelectedHeader(1)} />
                    </View>
                  )}
                  {selectedHeader == 1 && (
                    <View style={{flex: 1}}>
                      <MonthlyExpenses
                        nextOnPress={() => setSelectedHeader(2)}
                        backOnPress={() => setSelectedHeader(0)}
                      />
                    </View>
                  )}
                  {selectedHeader == 2 && (
                    <View style={{flex: 1}}>
                      <LoanProposalForm
                        backOnPress={() => setSelectedHeader(1)}
                        submitOnPress={() => console.log("Onsubmit")}
                      />
                    </View>
                  )}
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </StoryScreen>
    );
}
export default LoanProposal