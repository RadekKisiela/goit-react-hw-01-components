import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friednList/friendList';

import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friednList/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: 10,
        flexWrap: 'wrap',
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
    </div>
  );
};
