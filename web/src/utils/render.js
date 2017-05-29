import Vue from 'vue';
import HTMLParser from './htmlParse'

export const parse = function (tem,that) { 
    return Vue.compile(tem).render.bind(that)();
}

export const addTem =function(value,that,target){ 
    if(!that.template){ 
        return tag2ele(value.value)
    }else{ 
        console.log(value,target,that)
        return that.template;
    } 
}


function tag2ele(tag){
    return '<'+tag+'></'+tag+'>'
}

