require('@cypress/xpath')
describe('Testando Meu Pc.net', () => {
  
 it('Validando cadastro', () => {
    // Entrando no website escolhido
    cy.visit('https://meupc.net/')

    // Esperando 1 segundo para executar as funções abaixo
    cy.wait(1000)
    
    // Clicando no botão de menu pela classe .nav-burger
    cy.get('.navbar-burger').click()

    // Clicando no botão de cadastro
    cy
    .get('ul.menu-list') // Pegando a ul com a classe .menu-list
    .children('li') // Pegando os filhos da ul
    .children('a[href="https://meupc.net/cadastro"]') // Pegando o filho que tem o href com o valor https://meupc.net/cadastro 
    .click()// Clicar

    // Preenchando o campo nome do cadastro com o valor Jane Doe
    cy.get('input[name="nome"]').type('Jane Doe')
    
    // Preenchendo o campo email do cadastro com o valor johndoe@example.com
    cy.get('input[name="email"]').type('johndoe@example.com')
    
    // Preenchendo o campo senha do cadastro com o valor Examplesenha
    cy.get('input[placeholder="Defina uma senha"]').type('Examplesenha')
   
    // Clicando no checkbox de aceitar os termos
    // uncheck tira a checagem e o check faz a checagem 
    cy.get('input[type="checkbox"]').check({ force: true })
    
    // Clicando no botão de cadastrar-se 
    cy.contains('Cadastrar-se').click()

    // Verificar se chegamos na tela final do cadastro 
    cy.contains('Escolha seu nome de usuário').should('be.visible')
       
  })

   //e mail: testecypress@tuamaeaquelaursa.com
   //Senha: testecypress
   //Verificar se a tela possui o texto “PC atual de TesteCypress”*/


  it.only('Validando login', () => {

    cy.visit('https://meupc.net/')

    cy.wait(1000)

    cy.get('.navbar-burger').click()

    cy
    .get('ul.menu-list')
    .children('li')
    .children('a[href="https://meupc.net/login"]')
    .click()

    cy.contains('Email ou nome de usuário').siblings('input').type('testecypress@tuamaeaquelaursa.com')
    /*cy.xpath ('/html/body/main/section/div/div/form/section/div[4]/span/input').type('testecypress');
    cy.xpath('/html/body/main/section/div/div/form/section/div[5]/button[2]').click()
    */
   cy.contains('Senha').siblings('span').children('input').type('testecypress') // Contém,irmão e filho

   cy.contains('Cancelar').siblings('button').click()

   cy.contains('PC atual de TesteCypress').should('be.visible')

  })
})