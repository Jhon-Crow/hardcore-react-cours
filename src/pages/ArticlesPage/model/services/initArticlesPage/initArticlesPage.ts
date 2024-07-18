import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrders } from '@/shared/types/sort';
import { ArticleType, ArticleSortField } from '@/entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlePage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrders;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const typeFromUrl = searchParams.get('type') as ArticleType;
            const searchFromUrl = searchParams.get('search');

            if (orderFromUrl) { dispatch(articlesPageActions.setOrder(orderFromUrl)); }
            if (sortFromUrl) { dispatch(articlesPageActions.setSort(sortFromUrl)); }
            if (searchFromUrl) { dispatch(articlesPageActions.setSearch(searchFromUrl)); }
            if (typeFromUrl) { dispatch(articlesPageActions.setType(typeFromUrl)); }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
