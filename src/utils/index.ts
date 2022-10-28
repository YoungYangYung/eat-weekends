export const isWeiXin = ()=>{
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('micromessenger') != -1;
}