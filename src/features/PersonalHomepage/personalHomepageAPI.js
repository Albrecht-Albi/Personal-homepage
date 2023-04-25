import axios from "axios";

const gitHubApiBaseURL = " https://api.github.com"

export const getRepositories = () =>
    axios.get(`${gitHubApiBaseURL}/users/Albrecht-Albi/repos`)
        .then(response => response.data);