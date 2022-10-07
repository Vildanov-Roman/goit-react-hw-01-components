import { User } from "./Profile/Profile";
import { Statistics } from "./Statistics"
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./TransactionHistory";

import data from "../json/data.json";
import user from "../json/user.json";
import friends from "../json/friends.json"
import transactions from "../json/transactions.json";

export const App = () => {
  return (
    <div>
      <User username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/> 
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
