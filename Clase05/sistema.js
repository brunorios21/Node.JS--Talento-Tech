import os from "node:os";

export function getSystemInfo(){
    return {
        platform: os.platform(),
        cpu: os.cpus()[0].model,        
    }
}
