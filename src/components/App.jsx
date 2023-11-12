import React from 'react';

import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friendList/friendList';
import TransactionHistory from './transaction/transactionHistory';

import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendList/friends.json';
import transactions from './transaction/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
