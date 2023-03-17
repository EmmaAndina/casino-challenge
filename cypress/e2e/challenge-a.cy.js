describe('casino user register', () => {
  it('complete register form', () => {

    // Visit website
    cy.visit('https://demo.casino/user/registration')
    

    // Close modal
    cy.get('.mfp-close').click()

    // Mail
    cy.get('[data-test="input-email"]')
      .type('challenge-qa-2023@challenge.com')
    
    // Select and change currency
    cy.get('.input__wrapper > .selectric-wrapper > .selectric > .label').click()
    cy.get('.input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="1"]').click()
    
    // Password and confirmation
    cy.get('[data-test="input-password"]')
      .type('Test1234!')
    cy.get('[data-test="input-password_confirmation"]')
      .type('Test1234!')
    
    // Checkbox "terms and conditions"
    cy.get('.input__wrapper > label')
      .click()
    
    // Click "Create account"
    cy.get('[data-test="control-submit"]')
      .click()

    // Waiting for system
    cy.wait(5000);

    // Assert confirmation
    cy.get('.notification__title').should('be.visible')
      
    
  })

  it('complete register form plus captcha', () => {
    
    // Registration URL
    cy.visit('https://demo.casino/user/registration')    

    // Close modal
    cy.get('.mfp-close').click()

    // Wait from
    cy.get('[data-test="input-email"]').should('exist')

    // Email
    cy.get('[data-test="input-email"]').type('challengetest2023@challenge.com')

    // Change currency
    cy.get('.input__wrapper > .selectric-wrapper > .selectric > .label').click()
    cy.get('.input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="1"]').click()

    // Password y confirmation
    cy.get('[data-test="input-password"]').type('Test1234!')
    cy.get('[data-test="input-password_confirmation"]').type('Test1234!')

    // Checkbox "terms and conditions"
    cy.get('.input__wrapper > label').click()

    // Click "Create account"
    cy.get('[data-test="control-submit"]').click()      

/* CAPTCHA RESOLUTION WITH ANTICAPTCHA
    
    // Wait for captcha
    cy.get('.captcha__image').should('exist')

    // Get captcha URL
    cy.get('.captcha__image > img').invoke('attr', 'src').then((captchaUrl) => {
      
      
    //  API anticaptcha.com for captcha solving
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
        
    // Wait for system to solve it
      cy.wait(5000)

    // Verify captcha solution
        cy.request({
          method: 'POST',
          url: 'https://api.anti-captcha.com/getTaskResult',
          body: {
            clientKey: 'ANTICAPTCHA_KEY',
            taskId: taskId
          }
        }).then((response) => {
          const captchaText = response.body.solution.text
          
          // Input captcha
          cy.get('[data-test="input-captcha"]').type(captchaText)


        })
      })
    })*/

    // Wait for system
    cy.wait(5000);

    // Assert confirmation
    cy.get('.notification__title').should('be.visible')


  })
})