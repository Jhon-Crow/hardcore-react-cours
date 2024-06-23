import { ArticleDetailsCommentScheme } from '../types/ArticleDetailsCommentScheme';
import { ArticleDetailsRecommendationsScheme } from '../types/ArticleDetailsRecommendationsScheme';

export interface ArticleDetailsPageScheme {
    comments: ArticleDetailsCommentScheme;
    recommendations: ArticleDetailsRecommendationsScheme;
}
