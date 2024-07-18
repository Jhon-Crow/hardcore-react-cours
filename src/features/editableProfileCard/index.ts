export type { ProfileScheme } from './model/types/editableProfileCardSchema';

export { ValidateProfileError } from './model/consts/consts';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';

export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';

export { profileReducer, profileSlice, profileActions } from './model/slice/profileSlice';
