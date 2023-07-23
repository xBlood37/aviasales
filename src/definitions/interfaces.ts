export interface IFilter {
  id: number;
  text: string;
  isChecked: boolean;
  value: number;
}

export interface ITabs {
  id: number;
  text: string;
  isActive: boolean;
}

export interface ITicket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
}

export interface ITickets {
  isLoaded: boolean;
  isError?: boolean;
  data: ITicket[];
}

export interface IState {
  filters: {
    data: IFilter[];
  };
  tabs: {
    data: ITabs[];
  };
  tickets: ITickets;
}

export interface IStateTickets {
  isLoaded: boolean;
  isError?: boolean;
  data?: ITicket[];
}

export interface IStateTabs {
  data: ITabs[];
}

export interface IStateFilters {
  data: IFilter[];
}
