import * as ko from 'knockout';

const colors = [
    {
        name: 'Глубокий космос',
        color: '#0b0a0a',
        variations: [
            { color: '#1D1719', name: 'Красновато-черный' },
            { color: '#1A1A1A', name: 'Зеленовато-черный' },
            { color: '#161415', name: 'Звёздная бездна' }
        ]
    },
    {
        name: 'Винный',
        color: '#6b0908',
        variations: [
            { color: '#E81001', name: 'Коралловый' },
            { color: '#A40404', name: 'Насыщенный терракот' },
            { color: '#70000E', name: 'Ночной виноград' }
        ]
    },
    {
        name: 'Светлый туман',
        color: '#d6d6d6',
        variations: [
            { color: '#E9E4E1', name: 'Утренний туман' },
            { color: '#CECDC9', name: 'Серебряный крайола' }, // Нашли на просторах инета: лягушка в обмороке
            { color: '#C3C5C4', name: 'Серебристая дымка' }
        ]
    },
    {
        name: 'Пепельный',
        color: '#545454',
        variations: [
            { color: '#99999B', name: 'Серый шёлк' },
            { color: '#88888A', name: 'Светлый пепел' }, 
            { color: '#777A7F', name: 'Аспидно серый' } // Нашли на просторах инета: лягушка в обмороке
        ]
    },
    {
        name: 'Темная сталь',
        color: '#383838',
        variations: [
            { color: '#5D5E60', name: 'Светлый асфальт' },
            { color: '#3F4042', name: 'Гранитовый серый' },
            { color: '#353334', name: 'Темно-синевато черный' }
        ]
    },
    {
        name: 'Песочный беж',
        color: '#b7a28e',
        variations: [
            { color: '#E7DDD4', name: 'Светлый пляж' },
            { color: '#DBCBBE', name: 'Карамельный песок' },
            { color: '#B6967F', name: 'Тёмный песок' },
        ]
    },
    {
        name: 'Корица',
        color: '#7e5441',
        variations: [
            { color: '#2D1E17', name: 'Темный серо-коричневый' },
            { color: '#523F31', name: 'Темный терракот' },
            { color: '#796254', name: 'Капучино' }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    ko.applyBindings({
        selectedColor: ko.observable('Винный'),
        materialColors: colors,
    });
});
