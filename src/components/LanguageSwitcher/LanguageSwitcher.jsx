import { useState } from 'react';
import FlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState('US');

  const handleSelect = countryCode => {
    const languageMap = {
      US: 'en',
      RU: 'ru',
    };
    const language = languageMap[countryCode];
    i18n.changeLanguage(language);
    setSelectedCountry(countryCode);
  };

  return (
    <FlagsSelect
      countries={['US', 'RU']}
      customLabels={{ US: 'English', RU: 'Русский' }}
      selected={selectedCountry}
      fullWidth={false}
      onSelect={handleSelect}
    />
  );
};

export default LanguageSwitcher;
