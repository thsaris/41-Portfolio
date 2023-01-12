class IsValid {
    static object(obj) {
        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
            return false;
        }
        return true;
    }

    static nonEmptyArray(arr) {
        return Array.isArray(arr) && arr.length > 0;
    }

    static icon(str) {
        if (typeof str !== 'string' || str === '' || str.length > 15) {
            return false;
        }
        return true;
    }

    static text(str) {
        if (typeof str !== 'string' || str === '' || str.length > 15) {
            return false;
        }
        return true;
    }
}

export { IsValid };