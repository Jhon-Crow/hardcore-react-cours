export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { ArticleDetailsScheme } from './model/types/articleDetailsScheme';

export { ArticleList } from './ui/ArticleList/ArticleList';
export { getArticleDetailsData } from './model/selectors/articleDetails';
export { ArticleListItem } from './ui/ArticleListItem/ArticleListItem';
export {
    articleDetailsReducer,
    articleDetailsSlice,
    articleDetailsActions,
} from './model/slice/articleDetailsSlice';

export type { Article } from './model/types/article';
export {
    ArticleView,
    ArticleType,
    ArticleSortField,
    ArticleBlockType,
} from './model/consts/articleConsts';
