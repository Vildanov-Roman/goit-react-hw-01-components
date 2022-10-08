import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistic/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./Transaction/TransactionHistory";

import user from "../json/user.json";
import data from "../json/data.json";
import friends from "../json/friends.json"
import transactions from "../json/transactions.json";


export const App = () => {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/> 
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
