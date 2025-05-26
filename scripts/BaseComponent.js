class BaseComponent {
    constructor() {
        if (this.constructor === BaseComponent) {
            throw new Error('BaseComponent is an abstract class and cannot be instantiated directly.');
        }
    }

    getProxyState(initialState) {
        return new Proxy(initialState, {
            get: (target, prop) => {
                return target[prop];
            },
            set: (target, prop, newValue) => {
                const oldValue = target[prop];
                target[prop] = newValue;

                if (newValue !== oldValue) {
                    this.updateUI();
                }

                return true;
            },
        });
    }
    // перерисовака UI в ответ на обнволение состояния
    updateUI() {
        throw new Error('updateUI method must be implemented in the subclass');
    }
}

export default BaseComponent;
