describe('Registro de usuario en el casino', () => {
  it('Completa el formulario de registro', () => {

    // Dirigirse a la pag de registro
    cy.visit('https://demo.casino/user/registration')
    

    // Cerrar modal
    cy.get('.mfp-close').click()

    // Encuentra el campo de correo electrónico y escribe la dirección de correo
    cy.get('[data-test="input-email"]')
      .type('challenge-qa-2023@challenge.com')
    
    // Encuentra el select de moneda y selecciona EUR
    cy.get('.input__wrapper > .selectric-wrapper > .selectric > .label').click()
    cy.get('.input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="1"]').click()
    
    // Encuentra los campos de contraseña y repite la contraseña y escribe la contraseña
    cy.get('[data-test="input-password"]')
      .type('Test1234!')
    cy.get('[data-test="input-password_confirmation"]')
      .type('Test1234!')
    
    // Marca el checkbox de "terms and conditions"
    cy.get('.input__wrapper > label')
      .click()
    
    // Hace clic en el botón "Create account"
    cy.get('[data-test="control-submit"]')
      .click()

    // Esperar al sistema
    cy.wait(5000);

    // Comprobar que el proceso fue exitoso
    cy.get('.notification__title').should('be.visible')
      
    
  })

  it('Completa el formulario de registro con captcha', () => {
    
    // Dirigirse a la pag de registro
    cy.visit('https://demo.casino/user/registration')    

    // Cerrar modal
    cy.get('.mfp-close').click()

    // Espera hasta que aparezca el formulario de registro
    cy.get('[data-test="input-email"]').should('exist')

    // Ingresa la dirección de correo electrónico
    cy.get('[data-test="input-email"]').type('challengetest2023@challenge.com')

    // Cambiar moneda a EUR
    cy.get('.input__wrapper > .selectric-wrapper > .selectric > .label').click()
    cy.get('.input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="1"]').click()

    // Contraseña y confirmación
    cy.get('[data-test="input-password"]').type('Test1234!')
    cy.get('[data-test="input-password_confirmation"]').type('Test1234!')

    // Check el checkbox de "terms and conditions"
    cy.get('.input__wrapper > label').click()

    // Clic en el botón "Create account"
    cy.get('[data-test="control-submit"]').click()      

/* RESOLUCIÓN DEL CAPTCHA CON ANTICAPTCHA
    
    // Espera hasta que aparezca el captcha
    cy.get('.captcha__image').should('exist')

    // Obtén la URL del captcha
    cy.get('.captcha__image > img').invoke('attr', 'src').then((captchaUrl) => {
      
      
    // Utiliza la API de anticaptcha.com para resolver el captcha
    cy.request({
        method: 'POST',
        url: 'https://api.anti-captcha.com/createTask',
        body: {
          clientKey: 'ANTICAPTCHA_KEY',
          task: {
            type: 'ImageToTextTask',
            body: captchaUrl
          }
        }
      }).then((response) => {
        const taskId = response.body.taskId
        
    // Espera hasta que se resuelva el captcha
      cy.wait(5000)

    // Verifica el resultado del captcha
        cy.request({
          method: 'POST',
          url: 'https://api.anti-captcha.com/getTaskResult',
          body: {
            clientKey: 'ANTICAPTCHA_KEY',
            taskId: taskId
          }
        }).then((response) => {
          const captchaText = response.body.solution.text
          
          // Ingresa el resultado del captcha en el campo correspondiente
          cy.get('[data-test="input-captcha"]').type(captchaText)


        })
      })
    })*/

    // Esperar al sistema
    cy.wait(5000);

    // Comprobar proceso exitoso
    cy.get('.notification__title').should('be.visible')


  })
})