export interface GetDeviceLocationResponse {
  city?: string | null;
  state?: string | null;
  lat: number;
  long: number;
}

export enum LocationServicePermission {
  REJECTED = 'permission not granted',
}
