/* eslint-disable no-prototype-builtins */

import { Platform, NativeModules } from 'react-native';

import I18n from 'i18n-js';

import pt_bR from '#core/utils/translate/pt-br.json';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
};

const getLanguageByDevice = (): string => {
  const language =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager?.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  return language || normalizeTranslate.pt_BR;
};

I18n.translations = {
  en_US: pt_bR,
  pt_BR: pt_bR,
};

const setLanguageToI18n = (): void => {
  const language = getLanguageByDevice();
  const translateNormalize =
    normalizeTranslate[language as keyof typeof normalizeTranslate];

  if (I18n.translations.hasOwnProperty(translateNormalize)) {
    I18n.locale = translateNormalize;
  } else {
    I18n.locale = normalizeTranslate.pt_BR;
  }
};

setLanguageToI18n();
export const translate = (key: string): string => I18n.t(key);
export const language = getLanguageByDevice();
