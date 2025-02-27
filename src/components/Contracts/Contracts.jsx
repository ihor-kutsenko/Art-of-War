import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn.jsx';

import { events } from 'data/events/events';
import styles from './Contracts.module.scss';

const Contracts = () => {
  const { t } = useTranslation();
  const [selectedEvent1, setSelectedEvent1] = useState(events[0].id);
  const [selectedEvent2, setSelectedEvent2] = useState(events[1].id);
  const [showMore, setShowMore] = useState(null);

  const handleLoadMore = () => {
    setShowMore(prevState => prevState + 2);
  };

  const resetFilters = () => {
    setSelectedEvent1(events[0].id);
    setSelectedEvent2(events[1].id);
    setShowMore(false);
  };

  const calculateTotal = data => {
    return data.reduce(
      (acc, row) => ({
        contract: 'Total',
        amount: data.length > 0 ? data[data.length - 1].amount : 0,
        gold: acc.gold + row.gold,
        token: acc.token + row.token,
        blueSkills: acc.blueSkills + row.blueSkills,
        rareSkills: acc.rareSkills + row.rareSkills,
        epicSkills: acc.epicSkills + row.epicSkills,
        blueHero: acc.blueHero + row.blueHero,
        rareHero: acc.rareHero + row.rareHero,
        epicHero: acc.epicHero + row.epicHero,
      }),
      {
        contract: 'Total',
        amount: 0,
        gold: 0,
        token: 0,
        blueSkills: 0,
        rareSkills: 0,
        epicSkills: 0,
        blueHero: 0,
        rareHero: 0,
        epicHero: 0,
      }
    );
  };

  const renderTable = event => {
    if (!event) return null;
    const total = calculateTotal(event.data);
    return (
      <div key={event.id} className={styles.tableContainer}>
        <h2 className={styles.eventTitle}>{t(event.name)}</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <td className={`${styles.title} ${styles.contract}`}>
                {t('events.contract')}
              </td>
              <td className={`${styles.title} ${styles.amount}`}>
                {t('events.amount')}
              </td>
              <td className={`${styles.title} ${styles.gold}`}>
                {t('events.gold')}
              </td>
              <td className={`${styles.title} ${styles.token}`}>
                {t('events.token')}
              </td>
              <td className={`${styles.title} ${styles.blueSkills}`}>
                {t('events.blueSkills')}
              </td>
              <td className={`${styles.title} ${styles.rareSkills}`}>
                {t('events.rareSkills')}
              </td>
              <td className={`${styles.title} ${styles.epicSkills}`}>
                {t('events.epicSkills')}
              </td>
              <td className={`${styles.title} ${styles.blueHero}`}>
                {t('events.blueHero')}
              </td>
              <td className={`${styles.title} ${styles.rareHero}`}>
                {t('events.rareHero')}
              </td>
              <td className={`${styles.title} ${styles.epicHero}`}>
                {t('events.epicHero')}
              </td>
            </tr>
          </thead>
          <tbody>
            {event.data.map((row, index) => (
              <tr key={index}>
                <td>{row.contract}</td>
                <td>{row.amount}</td>
                <td>{row.gold}</td>
                <td>{row.token}</td>
                <td>{row.blueSkills}</td>
                <td>{row.rareSkills}</td>
                <td>{row.epicSkills}</td>
                <td>{row.blueHero}</td>
                <td>{row.rareHero}</td>
                <td>{row.epicHero}</td>
              </tr>
            ))}
            <tr className={styles.totalRow}>
              <td>{t('events.total')}</td>
              <td>{total.amount}</td>
              <td>{total.gold}</td>
              <td>{total.token}</td>
              <td>{total.blueSkills}</td>
              <td>{total.rareSkills}</td>
              <td>{total.epicSkills}</td>
              <td>{total.blueHero}</td>
              <td>{total.rareHero}</td>
              <td>{total.epicHero}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const filteredEvents = events.filter(
    event => event.id !== selectedEvent1 && event.id !== selectedEvent2
  );

  return (
    <div className={styles.contracts}>
      <div className={styles.tablesWrapper}>
        <div className={styles.selectWrapper}>
          <label className={styles.label}>{t('events.selectEvent')}</label>
          <select
            value={selectedEvent1}
            onChange={e => setSelectedEvent1(Number(e.target.value))}
            className={styles.select}
          >
            {events
              .filter(event => event.id !== selectedEvent2)
              .map(ev => (
                <option key={ev.id} value={ev.id}>
                  {t(ev.name)}
                </option>
              ))}
          </select>

          <button className={styles.clearFilter} onClick={resetFilters}>
            {t('events.clearFilter')}
          </button>
        </div>
        {renderTable(events.find(e => e.id === selectedEvent1))}

        <div className={styles.selectWrapper}>
          <label className={styles.label}>{t('events.selectEvent')}</label>
          <select
            value={selectedEvent2}
            onChange={e => setSelectedEvent2(Number(e.target.value))}
            className={styles.select}
          >
            {events
              .filter(event => event.id !== selectedEvent1)
              .map(ev => (
                <option key={ev.id} value={ev.id}>
                  {t(ev.name)}
                </option>
              ))}
          </select>

          <button className={styles.clearFilter} onClick={resetFilters}>
            {t('events.clearFilter')}
          </button>
        </div>
        {renderTable(events.find(e => e.id === selectedEvent2))}
      </div>

      {!showMore && filteredEvents.length > 0 && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}

      {showMore && filteredEvents.map(event => renderTable(event))}
    </div>
  );
};
export default Contracts;
