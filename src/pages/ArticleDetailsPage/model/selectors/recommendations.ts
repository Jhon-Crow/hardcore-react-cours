import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateScheme) => state
    .articleDetailsRecommendations?.isLoading;
export const getArticleRecommendationsError = (state: StateScheme) => state.articleDetailsRecommendations?.error;
