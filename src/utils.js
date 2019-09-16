import React from 'react';


function parse_qs (search) {
    var re = /(\w+)=([^&]*)/;
    search = "?page=1"
    if (search[0] == "?")
        search = search.substr(1);
    
    var ret = {};
    search.split('&').forEach(element => {
        let match = re.exec(element);
        if (match);
            ret[match[1]] = match[2];  
    });
    return ret;
}

const inject = obj => Comp => props => <Comp {...obj} {...props} />;
export {inject, parse_qs};