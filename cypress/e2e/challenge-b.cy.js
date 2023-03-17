describe('Profile menu urls', () => {
    it('check profile menu urls accesible', () => {
      // Visit casino demo login page
      cy.visit('https://demo.casino/user/login')

      // Close modal
    cy.get('.mfp-close').click()
  
      // Email and password
      cy.get('[data-test="input-username"]').type('demo-challenge@emma.com')
      cy.get('[data-test="input-password"]').type('Test1234!')
  
      // Click "sign in" button
      cy.get('[data-test="control-submit"] > span').click()

      // System wait
      cy.wait(22000)
  
      // Visit profile section
      cy.visit('https://demo.casino/cabinet/profile/index')
  
      // Get by class every link form "profile-menu__item-link" using "each" methond
      cy.get('.profile-menu__item-link').each((menuOption) => {

      // Get "href" attribute from each link
      const link = menuOption.attr('href')

      // HTTP request for each URL & assert succesful response (status code 2xx).
      cy.request(link).its('status').should('be.within', 200, 299)
      })
    })
  })