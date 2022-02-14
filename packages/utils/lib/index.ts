'use strict';

import core from "@kk/core"
console.log(core, 'croe')

const normalTask = new Promise((resolve, rejeact)=>{
    setTimeout(()=>{
       resolve()
    },1000)
})