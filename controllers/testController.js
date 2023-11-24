const doSomething = (req,res)=>{
    res.send('Desde /api :)');
}

const respuestason=(req,res)=>{
    res.json({"mongo":"funcionando"})
}

export {
    doSomething,
    respuestason
}