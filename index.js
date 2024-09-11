const { select } = require ('@inquirer/prompts')

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
                    console.log ("vamor cadastrar")
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