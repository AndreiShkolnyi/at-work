import { Provider } from "react-redux";
import { setupStore } from "./store.config";
import { saveState } from '../../../shared/services/storage';
import { USERS_DATA } from '../../../entities/userCard/model/userSlice';


const store = setupStore;

store.subscribe(() => {
  saveState(store.getState().users, USERS_DATA);
})

export const StoreProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};