'use strict';


function acl(action) {

    return (req, res, next)=>{
        try {
            
            if (req.user.actions.includes(action)) {
                console.log('user inside acl middleware',req.user.actions);
                next();
                
            }else{
                next('access denied');
            }
        } catch (error) {
            
        }
    }
    
}

module.exports =acl;