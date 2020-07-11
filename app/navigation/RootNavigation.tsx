import * as React from 'react';

export const isMountedRef = React.createRef();

export let navigationRef = React.createRef();

export function navigate(name:string, params:object) {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function goBack() {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.goBack();
  }
}