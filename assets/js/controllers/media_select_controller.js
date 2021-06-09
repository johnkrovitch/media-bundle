import { Controller } from 'stimulus';
import events from "../events/events";

export default class extends Controller {
    connect() {
    
    }
    
    showDataSource(event) {
        console.log(event);
    }
};
