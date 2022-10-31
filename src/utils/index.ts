export const isWeiXin = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("micromessenger") != -1;
};

export const isValidArray = (target: any): target is any[] => {
    return Array.isArray(target) && target.length > 0;
};
