import { client } from './Client';

export const logUser = (username, password) => {
    return client.post('/auth/', { username, password })
        .then(function (response) {
            localStorage.setItem('session', response.data.token);
            return {
                token: response.data.token,
                isLogged: true,
            };
        });
};

export const loadSession = () => {
    const token = localStorage.getItem('session');
    if(token){
        return Promise.resolve({ token, isLogged: true });
    } else {
        return Promise.resolve({ token: null, isLogged: false });
    }
};

export const logOffUser = () => {
    localStorage.clear();
    return Promise.resolve('LoggedOut');
};

export const getStreamingKey = (canalId) => {
    return client.get(`/canais/${canalId}/`)
        .then(function (response) {
            return {
                nome: response.data.nome,
                mstoken: response.data.streamings[0]['mediastream_access_token'],
                msid: response.data.streamings[0]['mediastream_id'],
            };
        });
};

export const getVideoData = (videoId) => {
    return client.get(`/v2/videos/${videoId}/`)
        .then(function (response) {
            return {
                nome: response.data.titulo,
                msid: response.data.id_mediastream,
                mstoken: null,
            };
        });
};