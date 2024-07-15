export type { ProfileScheme } from './model/types/editableProfileCardSchema';

export { ValidateProfileError } from '../editableProfileCard/model/consts/consts';

export { getProfileData } from '../editableProfileCard/model/selectors/getProfileData/getProfileData';

export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';

export { profileReducer, profileSlice, profileActions } from './model/slice/profileSlice';
