import { UserBusiness } from "../src/business/UserBusiness";
import { BaseError } from "../src/errors/BaseError";
import { ILoginInputDTO, ISignUpInputDTO } from "../src/model/User";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new HashManagerMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    // signUp
    test("SignUp success", async () => {
        const input: ISignUpInputDTO = {
            name: "New User",
            email: "newUser@gmail.com",
            password: "normalusermock"
        }

        const response = await userBusiness.signUp(input);
        expect(response.message).toBe("User New User registered");
        expect(response.token).toBe("token-normal-mock");
    })

    test("Empty fields", async () => {
        expect.assertions(2);
        try {
            const input: ISignUpInputDTO = {} as any;
            
            await userBusiness.signUp(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Empty field(s)");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Name different from string", async () => {
        expect.assertions(2);
        try {
            const input: ISignUpInputDTO = {
                name: 8,
                email: "email@gmail.com",
                password: "password"
            } as any;
            
            await userBusiness.signUp(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid name");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Email different from string", async () => {
        expect.assertions(2);
        try {
            const input: ISignUpInputDTO = {
                name: "User name",
                email: 8,
                password: "password"
            } as any;
            
            await userBusiness.signUp(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid email");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Invalid email", async () => {
        expect.assertions(2);
        try {
            const input: ISignUpInputDTO = {
                name: "User name",
                email: "emailil.com",
                password: "password"
            } as any;
            
            await userBusiness.signUp(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid email");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Password different from string", async () => {
        expect.assertions(2);
        try {
            const input: ISignUpInputDTO = {
                name: "User name",
                email: "email@gmail.com",
                password: 8
            } as any;
            
            await userBusiness.signUp(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid password");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Name length < 3", async () => {
        expect.assertions(2);
        try {
            const input: ISignUpInputDTO = {
                name: "ok",
                email: "email@gmail.com",
                password: "password"
            } as any;
            
            await userBusiness.signUp(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid name length. Minimum of 3 characters required");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Password length < 6", async () => {
        expect.assertions(2);
        try {
            const input: ISignUpInputDTO = {
                name: "User Name",
                email: "email@gmail.com",
                password: "ok"
            } as any;
            
            await userBusiness.signUp(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid password length. Minimum of 6 characters required");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Email already exists", async () => {
        expect.assertions(2);
        try {
            const input: ISignUpInputDTO = {
                name: "New User",
                email: "normalusermock@gmail.com",
                password: "password"
            } as any;
            
            await userBusiness.signUp(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Email already exists");
                expect(error.statusCode).toBe(409);
            }
        }
    })

    // login
    test("Login success", async () => {
        const input: ILoginInputDTO = {
            email: "normalusermock@gmail.com",
            password: "normalusermock"
        };

        const response = await userBusiness.login(input);
        expect(response.message).toBe("User Normal User Mock logged in!");
        expect(response.token).toBe("token-normal-mock");
    })

    test("Empty fields", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {} as any;
            
            await userBusiness.login(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Empty field(s)");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Email different from string", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {
                email: 8,
                password: "password"
            } as any;
            
            await userBusiness.login(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid email");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Password different from string", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {
                email: "email@gmail.com",
                password: 8
            } as any;
            
            await userBusiness.login(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid password");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Email not registered", async () => {
        expect.assertions(2);
        try {
            const input: ILoginInputDTO = {
                email: "newemailnotregistered@gmail.com",
                password: "password"
            } as any;
            
            await userBusiness.login(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Email not registered");
                expect(error.statusCode).toBe(404);
            }
        }
    })

    test("Wrong Password", async () => {
        expect.assertions(2);
        try {
            const input: ISignUpInputDTO = {
                name: "Normal User Mock",
                email: "normalusermock@gmail.com",
                password: "wrongPassword"
            } as any;
            
            await userBusiness.login(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Wrong password");
                expect(error.statusCode).toBe(401);
            }
        }
    })
})