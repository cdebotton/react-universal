import { Location } from 'history';

declare class HistoryType {
  createLocation(url: string): Location;
}

declare module 'history' {
  declare function createMemoryHistory(): HistoryType;
  declare function createBrowserHistory(): HistoryType;
  declare function createHashHistory(): HistoryType;
}

declare module 'history/lib/createBrowserHistory' {
  declare function exports(): {};
}
