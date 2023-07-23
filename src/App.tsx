import React, { useReducer, Reducer, useEffect } from "react";
import Filters from "./components/Filters";
import Tabs from "./components/Tabs";
import Tickets from "./components/Tickets";
import { actions } from "./redux";
import {
  IStateTickets,
  IStateTabs,
  IStateFilters,
} from "./definitions/interfaces";
import { ActionTickets, ActionTabs, ActionFilters } from "./definitions/types";
import { ticketsReducer, tabsReducer, filtersReducer } from "./redux/reducers";
import { initTabs, initFilters, initTickets } from "./redux/state";

import "./app.scss";

import uwu from "./uwu.gif";

const App = () => {
  const [tickets, dispatchTickets] = useReducer<
    Reducer<IStateTickets, ActionTickets>
  >(ticketsReducer, initTickets);
  const [tabs, dispatchTabs] = useReducer<Reducer<IStateTabs, ActionTabs>>(
    tabsReducer,
    initTabs
  );
  const [filters, dispatchFilters] = useReducer<
    Reducer<IStateFilters, ActionFilters>
  >(filtersReducer, initFilters);

  useEffect(() => {
    actions.fetchTickets(dispatchTickets);
  }, []);

  const handleClickFilter = (item: any) => {
    actions.setFilters(dispatchFilters, filters, item);
  };

  const handleClickTab = (item: any) => {
    actions.setTabs(dispatchTabs, tabs, item);
  };

  return (
    <div className="wrap">
      <div className="header">
        <img src={uwu} className="App-dance-logo" alt="мопс" />
      </div>

      <div className="container">
        <Filters handleClick={handleClickFilter} filters={filters} />
        <div className="results">
          <div className="sort">
            <Tabs handleClick={handleClickTab} tabs={tabs} />
            <Tickets tickets={tickets} filters={filters} tabs={tabs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
