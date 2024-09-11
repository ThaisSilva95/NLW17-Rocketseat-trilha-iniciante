const { select, input } = require ('@inquirer/prompts')

let meta = {
    value: "Tomar 3 litros de água",
    chaecked: false
}

let metas = [meta]

const cadastrarMeta = async () => {
    const meta = await input ({ message: "Digite a meta: "})

    if (meta.length == 0){
        console.log("A meta precisa ser cadastrada.")
        return
    }

    metas.push(
        {value: meta, chaecked: false}
    )
}

const start = async () => {
    
    while(true){

        const opcao = await select ({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar metas",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })
        
                switch(opcao) {
                case "cadastrar":
                   await cadastrarMeta()
                   console.log(metas)
                break

                case "listar":
                    console.log ("vamos listar")
                break

                case "sair":
                    console.log ("Até a próxima!")
                    return
                }
        }
        
    }


start()