import React from 'react';
import { Text } from 'react-native';

export function Body(props:any) {
  return <Text {...props} style={[props.style, { fontFamily: 'sequel-sans' }]} />;
}

export function Bold(props:any) {
  return <Text {...props} style={[props.style, { fontFamily: 'sequel-sans-bold' }]} />;
}

export function Light(props:any) {
  return <Text {...props} style={[props.style, { fontFamily: 'sequel-sans-light' }]} />;
}
