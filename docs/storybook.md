## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`


Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
    title: 'shared/Button', // Определяет название и расположение компонента в иерархии Storybook. 
                            // В данном случае компонент будет находиться в разделе "shared" под именем "Button".
    component: Button, // здесь указываем сам компонент (его предваринетльно импортируем в файл стори)
    parameters: { //  Объект, содержащий дополнительные параметры для настройки отображения компонента в Storybook.
        layout: 'centered', // centered - центрировать компонент по горизонтали и вертикали на холсте, 
                            // также принимает fullscreen или padded, подробнее - https://storybook.js.org/docs/configure/story-layout
    },
    tags: ['autodocs'], //  тег для автоматической генерации документации 
    argTypes: {},       //  Объект, в котором можно задать типы аргументов для компонента. Это позволяет
                        // контролировать и изменять аргументы компонента прямо в интерфейсе Storybook.
    args: { onClick: fn() }, // Объект, задающий значения аргументов по умолчанию для компонента.
};                            // В данном случае задается функция `onClick`, которая будет вызываться при клике на кнопку.


export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

Clear.decorators = [ThemeDecorator(Theme.DARK)]; // так можно добавить декоратор для стори-кейса  
```



Вся документация Storybook на [официальном сайте](https://storybook.js.org/docs)

----
Общий ReadMe [тут](../README.md)
