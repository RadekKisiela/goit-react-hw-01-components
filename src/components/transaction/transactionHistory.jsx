import React from 'react';
import css from './transactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const TransactionItem = ({ transaction }) => {
  const { type, amount, currency } = transaction;

  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionHistory;
