## Тесты

В проекте используются 4 вида тестов:
1) ### Обычные unit тесты на jest - `npm run test:unit`
  - Эти тесты предназначены для проверки отдельных функций или модулей в изоляции.
  - Пример теста на Jest:
```typescript js 
import { Dispatch } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';

  const data = {
    id: '1',
    title: 'js',
};

describe('fetchArticleById.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateScheme;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });
    // ниже описан успешный исход
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data })); //  Мокаем метод get API, чтобы он возвращал промис с данными
        const result = await thunk.callThunk('1'); 
        // ниже описаны ожидаемые параметры
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
 // ниже описан неудачный исход
    test('error login(rejected)', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        // @ts-ignore
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
  ```
Сайт с документацией [тут](https://archive.jestjs.io/docs/en/22.x/getting-started.html)

----

2) ### Тесты на компоненты с React testing library -`npm run test:unit`
 -  Эти тесты предназначены для проверки компонентов React в изоляции.
 -  Пример теста с React Testing Library:
   ``` javascript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

    test('renders button with text', () => {
        render(<Button>Click me</Button>); // рендер элемента
        const buttonElement = screen.getByText(/click me/i); // получение элемента по индентификатору (в данном случае текст)
        expect(buttonElement).toBeInTheDocument(); // ожидаемый случай
});
```
Сайт с документацией [тут](https://testing-library.com/docs/)


----
3) ### Скриншотное тестирование с loki `npm run test:ui`
- Эти тесты предназначены для проверки визуальных изменений компонентов.
- Пример конфигурации :
```json
{
  "loki": {
    "looks-same": {
      "ignoreCaret": true
    },
    "configurations": {
      "chrome.laptop": {
        "target": "chrome.app",
        "width": 1366,
        "height": 768,
        "deviceScaleFactor": 1,
        "mobile": false
      },
      "chrome.iphone7": {
        "target": "chrome.app",
        "preset": "iPhone 7"
      }
    }
  }
}
```
Сайт с документацией [тут](https://loki.js.org/configuration.html)


----
4) ### e2e тестирование с Cypress `npm run test:e2e`

----
Общий ReadMe [тут](../README.md)

