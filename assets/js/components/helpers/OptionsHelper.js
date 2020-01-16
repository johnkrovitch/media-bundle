export default class OptionsHelper {
    static initializeOptions(defaults, options) {
        if (!options) {
            options = {};
        }
        return Object.assign(defaults, options);
    }
    
    static getDOMElement(selector) {
        let element = document.querySelector(selector);
    
        if (!element) {
            throw new Error('No DOM Element with selector "' + selector + '" has been found');
        }
        
        return element;
    }
    
    static getDOMNodeList(selector) {
        let elements = document.querySelectorAll(selector);
    
        if (!elements.length) {
            throw new Error('No DOM Element with selector "' + selector + '" has been found');
        }
    
        return elements;
    }
}
