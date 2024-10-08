import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../model/consts/consts';

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
