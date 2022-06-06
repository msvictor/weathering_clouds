export interface LocationState {
  city: string;
  state: string;
  lat: number;
  long: number;
  hasError?: boolean;
  isLoading?: boolean;
  isLocationEnable?: boolean;
}
