export {
    Profile,
    ProfileScheme,
} from './model/types/profile';

export {
    profileActions,
    profileSlice,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';

export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
