import * as Location from 'expo-location';

import GenericError from '#core/error/GenericError';

import { GetDeviceLocationResponse, LocationServicePermission } from './types';

const getDeviceLocation = async (): Promise<GetDeviceLocationResponse> => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status === Location.PermissionStatus.DENIED) {
    throw new GenericError(LocationServicePermission.REJECTED);
  }

  let deviceLocation: GetDeviceLocationResponse;

  const { coords } = await Location.getCurrentPositionAsync();
  deviceLocation = {
    lat: coords.latitude,
    long: coords.longitude,
  };

  if (coords) {
    const location = await Location.reverseGeocodeAsync({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
    deviceLocation = {
      ...deviceLocation,
      city: location[0].city,
      state: location[0].region,
    };
  }

  return deviceLocation;
};

export default { getDeviceLocation };
