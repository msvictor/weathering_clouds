export interface LocationState {
  city: string | null;
  state: string | null;
  lat: number | null;
  long: number | null;
  hasError?: boolean;
  isLoading?: boolean;
  isLocationEnable?: boolean;
}
