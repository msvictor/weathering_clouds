const getIconByApiName = (name: string): string => {
  switch (name) {
    case '01d':
    case '01n':
      return 'sun';

    case '02d':
    case '02n':
      return 'cloud';

    case '03d':
    case '03n':
      return 'cloud';

    case '04d':
    case '04n':
      return 'rain';

    case '09d':
    case '09n':
      return 'storm';

    case '10d':
    case '10n':
      return 'rain';

    case '11d':
    case '11n':
      return 'storm';

    case '13d':
    case '13n':
      return 'snow';

    case '50d':
    case '50n':
      return 'dry';

    default:
      return 'cloud';
  }
};

export { getIconByApiName };
