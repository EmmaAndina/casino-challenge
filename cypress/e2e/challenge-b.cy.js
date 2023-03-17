describe('Prueba de inicio de sesión y redirección en Casino Demo', () => {
    it('Inicia sesión y comprueba links en menu perfil', () => {
      // Visitar la página de inicio de sesión del casino demo
      cy.visit('https://demo.casino/user/login')

      // Cerrar modal
    cy.get('.mfp-close').click()
  
      // Introducir el correo electrónico y la contraseña
      cy.get('[data-test="input-username"]').type('demo-challenge@emma.com')
      cy.get('[data-test="input-password"]').type('Test1234!')
  
      // Hacer clic en el botón "sign in"
      cy.get('[data-test="control-submit"] > span').click()


      cy.wait(22000)
  
      // Comprobar que se ha iniciado sesión correctamente
      cy.visit('https://demo.casino/cabinet/profile/index')
  
      // Seleccionar todos los enlaces de las opciones de menú mediante la clase "profile-menu__item-link" usando el método "each".
      cy.get('.profile-menu__item-link').each((menuOption) => {

      // Obtener el atributo "href" de cada enlace
      const link = menuOption.attr('href')

      // Hacer una petición HTTP a cada URL de las opciones de menú y verificar que la respuesta sea exitosa (código de estado 2xx).
      cy.request(link).its('status').should('be.within', 200, 299)
      })
    })
  })