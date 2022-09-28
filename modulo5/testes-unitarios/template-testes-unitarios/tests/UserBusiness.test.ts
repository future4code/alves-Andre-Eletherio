import { UserBusiness } from "../src/business/UserBusiness"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testing UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock,
        new IdGeneratorMock,
        new HashManagerMock,
        new AuthenticatorMock
    );

    test("Return token and message after when sign up success", async () => {
        const input: ISignupInputDTO = {
            name: "User not signed",
            email: "usernotsigned@gmail.com",
            password: "usernotsigned"
        }

        const response = await userBusiness.signup(input);

        expect(response.token).toBe("token-mock-normal");
        expect(response.message).toBe("Cadastro realizado com sucesso");
    })


    test("Return token and message after logged in", async () => {
        const input: ILoginInputDTO = {
            email: "usermocknormal@gmail.com",
            password: "usermocknormal"
        }

        const response = await userBusiness.login(input);

        expect(response.token).toBe("token-mock-normal");
        expect(response.message).toBe("Login realizado com sucesso");
    })
})