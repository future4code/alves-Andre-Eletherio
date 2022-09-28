import { UserBusiness } from "../src/business/UserBusiness"
import { BaseError } from "../src/errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Um token é retornado quando o login é bem-sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

    // Errors signUp

    test("Name type is different from a string", async () => {
        expect.assertions(2);
        try {
            const input: ISignupInputDTO = {
                name: 78,
                email: "testemail@gmail.com",
                password: "123"
            } as any

            await userBusiness.signup(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'name' inválido");
            }
        }
    })

    test("Email type is different from a string", async () => {
        expect.assertions(2);
        try {
            const input: ISignupInputDTO = {
                name: "Test Name",
                email: false,
                password: "123"
            } as any

            await userBusiness.signup(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'email' inválido");
            }
        }
    })

    test("Password type is different from a string", async () => {
        expect.assertions(2);
        try {
            const input: ISignupInputDTO = {
                name: "Test Name",
                email: "testemail@gmail.com",
                password: 2
            } as any

            await userBusiness.signup(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'password' inválido");
            }
        }
    })

    test("Name length is less than 3", async () => {
        expect.assertions(2);
        try {
            const input: ISignupInputDTO = {
                name: "ab",
                email: "testemail@gmail.com",
                password: "123456"
            }

            await userBusiness.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres");
            }
        }
    })

    test("Password length is less than 6", async () => {
        expect.assertions(2);
        try {
            const input: ISignupInputDTO = {
                name: "Test Name",
                email: "testemail@gmail.com",
                password: "123"
            }

            await userBusiness.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres");
            }
        }
    })

    test("Email not valid", async () => {
        expect.assertions(2);
        try {
            const input: ISignupInputDTO = {
                name: "Test Name",
                email: "emailnotvalid",
                password: "123456"
            }

            await userBusiness.signup(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'email' inválido");
            }
        }
    })

    test("Email already exists", async () => {
        expect.assertions(2);
        try {
            const input: ISignupInputDTO = {
                name: "Test Name",
                email: "usermock@gmail.com",
                password: "testpassword"
            }

            await userBusiness.signup(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(409);
                expect(error.message).toBe("Email já cadastrado");
            }
        }
    })

    // Errors login

    test("Email type is different from a string", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {
                email: false,
                password: "123"
            } as any

            await userBusiness.login(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'email' inválido");
            }
        }
    })

    test("Password type is different from a string", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {
                email: "testemail@gmail.com",
                password: false
            } as any

            await userBusiness.login(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'password' inválido");
            }
        }
    })

    test("Password length is less than 6", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {
                email: "testemail@gmail.com",
                password: "123"
            }

            await userBusiness.login(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres");
            }
        }
    })

    test("Email not valid", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {
                email: "emailnotvalid",
                password: "123456"
            }

            await userBusiness.login(input);

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'email' inválido");
            }
        }
    })

    test("Email not found", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {
                email: "emailnotregistered@gmail.com",
                password: "123456"
            }

            await userBusiness.login(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404);
                expect(error.message).toBe("Email não cadastrado");
            }
        }
    })

    test("Password incorrect", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "incorrectPassword"
            }

            await userBusiness.login(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401);
                expect(error.message).toBe("Password incorreto");
            }
        }
    })
})