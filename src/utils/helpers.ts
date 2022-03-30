 const checkServer=():boolean=>{
    return typeof window === 'undefined';
}

export default {
    checkServer
}