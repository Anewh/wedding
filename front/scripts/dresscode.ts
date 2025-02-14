import * as ko from 'knockout';

const colors = [
    {
        name: 'Глубокий космос',
        color: '#0b0a0a',
        variations: [
            { color: '#1D1719', name: '' },
            { color: '#1A1A1A', name: '' },
            { color: '#161415', name: '' }
        ]
    },
    {
        name: 'Винный',
        color: '#6b0908',
        variations: [
            { color: '#E81001', name: '' },
            { color: '#A40404', name: '' },
            { color: '#70000E', name: '' }
        ]
    },
    {
        name: 'Светлый туман',
        color: '#d6d6d6',
        variations: [
            { color: '#E9E4E1', name: '' },
            { color: '#CECDC9', name: '' }, // Нашли на просторах инета: лягушка в обмороке
            { color: '#C3C5C4', name: '' }
        ]
    },
    {
        name: 'Пепельный',
        color: '#545454',
        variations: [
            { color: '#99999B', name: '' },
            { color: '#88888A', name: '' }, 
            { color: '#777A7F', name: '' } // Нашли на просторах инета: лягушка в обмороке
        ]
    },
    {
        name: 'Темная сталь',
        color: '#383838',
        variations: [
            { color: '#5D5E60', name: '' },
            { color: '#3F4042', name: '' },
            { color: '#353334', name: '' }
        ]
    },
    {
        name: 'Песочный беж',
        color: '#b7a28e',
        variations: [
            { color: '#E7DDD4', name: '' },
            { color: '#DBCBBE', name: '' },
            { color: '#B6967F', name: '' },
        ]
    },
    {
        name: 'Корица',
        color: '#7e5441',
        variations: [
            { color: '#2D1E17', name: '' },
            { color: '#523F31', name: '' },
            { color: '#796254', name: '' }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    ko.applyBindings({
        selectedColor: ko.observable('Винный'),
        materialColors: colors,
    });
});
