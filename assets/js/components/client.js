import client from 'axios';
import Loader from '../components/loader';

export default class Client {
    static get(url, options) {
        options = Object.assign({
            targetSelector: null
        }, options);
        const targets = document.querySelectorAll(options.targetSelector);
        const loader = new Loader({
            targetSelector: options.targetSelector
        })
        loader.show();

        return client.get(url).then(response => {
            loader.hide();
            targets.forEach(target => {
                target.innerHTML = response.data;
            })
        });
    }
}
