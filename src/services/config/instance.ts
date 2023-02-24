import axios from "axios";

// Configurations
const API_KEY = '';
const LANGUAGE = 'pt-BR';

const instance =axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: { 'Content-Type': 'application/json' },
    timeout: 1000,
});

instance.interceptors.request.use(config => {
    var defaultKeys = {api_key: API_KEY, language: LANGUAGE}
    config.params = { ...config.params, ...defaultKeys}
    return config;
});

export default instance;