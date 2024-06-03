export {
    userReducer,
    userActions,
} from './model/slice/userSlice';
export {
    UserScheme,
    User,
} from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
