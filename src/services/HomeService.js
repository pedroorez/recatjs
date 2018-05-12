import { client } from './Client';
import axios from 'axios';

export const fetchHome = () => {
    return axios.all([
        client.get('/photos'), 
    ])
        .then(axios.spread((photos) => {
            const photosdata = photos.data;
            const aovivo = photosdata.map((photo) => {
                return {
                    imagem: photo.thumbnailUrl,
                    id: photo.id,
                    url: photo.url,
                    titulo: photo.title,
                };
            });
            let home = [];
            home['destaques'] = aovivo.slice(0,10);
            home['aovivo'] = aovivo.slice(0,10);
            home['videos_mais_vistos'] = aovivo.slice(11,21);
            return home;
        }));
};