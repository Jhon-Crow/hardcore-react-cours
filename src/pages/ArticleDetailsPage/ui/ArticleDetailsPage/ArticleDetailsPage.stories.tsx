import type { Meta, StoryObj } from '@storybook/react';
import {
    Article, ArticleType, ArticleBlockType,
} from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'page/ArticleDetails/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '8',
        username: 'Poster',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
};

const comments = [
    {
        id: '1',
        text: 'some comment',
        articleId: '1',
        userId: '1',
    },
    {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        userId: '1',
    },
    {
        id: '3',
        text: 'some comment 3',
        articleId: '1',
        userId: '1',
    },
    {
        articleId: '1',
        userId: '1',
        text: 'TEST',
        id: '5JKSq7j',
    },
    {
        articleId: '1',
        userId: '1',
        text: 'TEST',
        id: 'yqj4UXr',
    },
    {
        articleId: '1',
        userId: '1',
        text: 'TEST',
        id: 'EhaXWqj',
    },
    {
        articleId: '1',
        userId: '2',
        text: 'user2 TEST',
        id: 'GiidYPV',
    },
    {
        articleId: '1',
        userId: '2',
        text: '7357',
        id: 'm7OJkKU',
    },
    {
        articleId: '1',
        userId: '2',
        text: 'works?',
        id: '_3BdQHU',
    },
    {
        articleId: '2',
        userId: '2',
        text: 'половина статьи из другой статьи (вторая)',
        id: 'Y2AWH2K',
    },
    {
        articleId: '3',
        userId: '2',
        text: 'а это просто дубль другой статьи',
        id: '3115MTq',
    },
    {
        articleId: '7',
        userId: '1',
        text: 'blablabla',
        id: 'ggZjcw2',
    },
    {
        articleId: '3',
        userId: '1',
        text: 'комментарии не работают, куда смотрит админ?',
        id: 'J5vPUO_',
    },
    {
        articleId: '4',
        userId: '1',
        text: 'Коммент чтоб поддержать автора',
        id: 'Zk6RrJA',
    },
];

export const Normal: Story = {
    args: {

    },
};

Normal.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    })];
