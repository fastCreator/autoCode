export const clickhandle=[];
// {
//     cb:fun,
//     target:Element
// }
document.onclick = function(e){
    for(let i in clickhandle){
        let item =clickhandle[i];
        if(!item.target.contains(e.target)){
            item.cb.call(this,e)
        } 
    }
}

export const $onout =function(target,cb){
    clickhandle.push({cb:cb,target:target});
}

 