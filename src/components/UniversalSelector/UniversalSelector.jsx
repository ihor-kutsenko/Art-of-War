import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './UniversalSelector.module.scss';

const UniversalSelector = ({
  options = [],
  optionLabelKey = 'title',
  placeholder = '',
  clearLabel = 'select.clear',
  onSelect,
}) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setSelected(value);
    onSelect(value);
  };

  const handleReset = () => {
    setSelected('');
    onSelect('');
  };

  return (
    <div className={styles.selectWrapper}>
      <select value={selected} onChange={handleChange}>
        <option value="">{t(placeholder)}</option>
        {options.map((item, index) => (
          <option key={index} value={t(item[optionLabelKey])}>
            {t(item[optionLabelKey])}
          </option>
        ))}
      </select>
      {selected && (
        <button type="button" onClick={handleReset}>
          {t(clearLabel)}
        </button>
      )}
    </div>
  );
};

export default UniversalSelector;
