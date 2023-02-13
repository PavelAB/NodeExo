

let msg = {
    info: (txt)=>{
        console.log(`A titre informatif : ${txt}`);
    },
    warning: (txt)=>{
        console.log(`/!\ Attention : ${txt}`);
    },
    error: (txt)=>{
        console.log(`>>>>>>>>>>_ERROR_ : ${txt}`);
    }
}

module.exports = msg;