import { Nations } from './nations';

export enum TheatersEnum {
    all = '',
    easternFront = 'Eastern Front',
    westernFront = 'Western Front',
    northAfrican = 'North Africa',
    pacific = 'Pacific',
    atlantic = 'Atlantic',
    european = 'European',
    italian = 'Italian',
    chinese = 'Chinese',
}

export const Theaters = {
    easternFront: {
        name: 'Eastern Front',
        countries: {
            Soviet_Union: true,
            Germany: true,
            Italy: true,
            Romania: true,
        }
    },
    westernFront: {
        name: 'Western Front',
        countries: [
            'Germany',
            ''
        ]
    }
}