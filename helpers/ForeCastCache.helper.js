'use strict';


class Cache{
    constructor(forcecastData){
        this.forcecastData=forcecastData
        this.timestamp=Date.now()
    }
}

module.exports=Cache