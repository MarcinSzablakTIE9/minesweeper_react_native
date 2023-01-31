const createMinePool = (props) =>{
    var tab = []
    var chance = 0
    var bombs = props[2] 

    for(var x = 0; x < props[0]; x++){
        tab.push([])
        for(var y = 0; y < props[1]; y++){
            tab[x].push(0)
        }
    }

    while(bombs>0){
        for(var x = 0; x < props[0]; x++){
            for(var y = 0; y < props[1]; y++){
                chance = Math.round(Math.random() * (props[0]*props[1]))
                if(tab[x][y]!=9){
                    if(chance==1){
                        tab[x][y]=9
                        bombs=bombs-1
                    }
                }
                if(bombs<=0){
                    break;
                }
            }
        }
    }

    for(var x = 0; x < props[0]; x++){
        for(var y = 0; y < props[1]; y++){
            if(tab[x][y] === 9){
                for(var i = -1; i <= 1;i++){
                    for(var j = -1; j <= 1; j++){
                        if (x + i >= 0 && x + i < props[0] && y + j >= 0 && y + j < props[1]) {
                            if (tab[x + i][y + j] !== 9) {
                              tab[x + i][y + j]++;
                            }
                        }
                    }
                }
            }
        }
    }

    return tab
}

export default createMinePool;