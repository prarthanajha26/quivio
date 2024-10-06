import React, { useState } from 'react'
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { vh } from '../utils/dimension';
import { View } from 'react-native';

LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: "Aujourd'hui"
  };
  
  LocaleConfig.defaultLocale = 'fr';

export default function Calendercomp(props) {


  return (
   
    <Calendar
 
    style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: vh(350),
    borderRadius:20
  }}
  theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#dd99ee'
  }}
  
  current={props.selectedDate}
  
  onDayPress={props.onDayPress}
  
  markedDates={props.markedDates}
/>

  );
}
