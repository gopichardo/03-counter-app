describe("Prueba demo.test.js", () => {

    test('Strings deben ser iguales', () => {

        //Arrange
        const message1 = "Hola";
        const message2 = "Hola";

        //Act
        //Assert
        expect(message1).toBe(message2);
    });

    test('Strings deben ser diferentes', () => {

        //Arrange
        const message1 = "Hola";
        const message2 = "Adios";

        //Act
        //Assert
        expect(message1).toBe(message2);
    });
});




