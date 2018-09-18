const baseUrl = 'http://headlessvalentine.flywheelsites.com/wp-json/wp/v2/';

export default class Api {

    posts() {
        let url = `${baseUrl}posts`;
        fetch(url).then(res => res.json());
    }
}