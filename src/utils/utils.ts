
export const LS = () => {
    const ls = localStorage;

    const save = (key: string, value: any) => {
        ls.setItem(key, JSON.stringify(value));
    };

    const remove = (key: string) => {
        ls.removeItem(key);
    };

    const get = (key: string) => {
        const item = ls.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
    };

    const exist = (key: string) => {
        if(key in ls){
            return true
        }
        else {
            return  false
        }
    }

    return {
        save,
        remove,
        get,
        ls,
        exist
    };
};