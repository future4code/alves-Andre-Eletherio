import { ShowBusiness } from "../src/business/ShowBusiness"
import { ICreateInputDTO, IDeleteTicketInputDTO, IPurchaseInputDTO } from "../src/model/Show"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import {AuthenticatorMock} from "./mocks/AuthenticatorMock"
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock"
import { BaseError } from "../src/errors/BaseError"

describe("Testando a ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new AuthenticatorMock(),
        new IdGeneratorMock()
    )

    // Create
    test("Show created", async ()=> {
        const input: ICreateInputDTO = {
            band: "Bruno Mars",
            starts_at: "06/12/2022",
            token: "token-admin-mock"
        }
        const response = await showBusiness.create(input);
        expect(response).toBe("Bruno Mars show created");
    })

    test("Empty fields", async () => {
        expect.assertions(2);
        try {
            const input: ICreateInputDTO = {} as any;
            
            await showBusiness.create(input);
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
            const input: ICreateInputDTO = {
                band: 8,
                starts_at: "07/12/2022",
                token: "token-admin-mock"
            } as any;
            
            await showBusiness.create(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid band name");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Invalid token", async () => {
        expect.assertions(2);
        try {
            const input: ICreateInputDTO = {
                band: "Tears for Fears",
                starts_at: "08/12/2022",
                token: "invalid-token"
            }

            await showBusiness.create(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid token");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Insufficient permission", async () => {
        expect.assertions(2);
        try {
            const input: ICreateInputDTO = {
                band: "Tears for Fears",
                starts_at: "08/12/2022",
                token: "token-normal-mock"
            }

            await showBusiness.create(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Insufficient permission");
                expect(error.statusCode).toBe(403);
            }
        }
    })

    test("Invalid date format", async () => {
        expect.assertions(2);
        try {
            const input: ICreateInputDTO = {
                band: "Tears for Fears",
                starts_at: "05-12-2022",
                token: "token-admin-mock"
            }

            await showBusiness.create(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid date format");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Invalid date period", async () => {
        expect.assertions(2);
        try {
            const input: ICreateInputDTO = {
                band: "Tears for Fears",
                starts_at: "29/08/2022",
                token: "token-admin-mock"
            }

            await showBusiness.create(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid date, the festival occour between 05-11 of december");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Date busy", async () => {
        expect.assertions(2);
        try {
            const input: ICreateInputDTO = {
                band: "Tears for Fears",
                starts_at: "05/12/2022",
                token: "token-admin-mock"
            }

            await showBusiness.create(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("There already is a show in this day");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    // Get
    test("Get shows", async () => {
        const response = await showBusiness.get();
        expect(response).toEqual([
            {
              "id": "002",
              "band": "Bruno Mars",
              "starts_at": new Date("2022-12-06T03:00:00.000Z"),
              "ticketsAvaiable": 0
            },
            {
              "id": "001",
              "band": "Coldplay",
              "starts_at": new Date("2022-12-05T03:00:00.000Z"),
              "ticketsAvaiable": 499
            },
          ])
    })

    // Purchase
    test("Purchase ticket", async () => {
        const input: IPurchaseInputDTO = {
            show_id: "001",
            token: "token-admin-mock"
        }

        const response = await showBusiness.purchase(input);
        expect(response).toBe("Ticket purchased");
    })

    test("Empty fields", async () => {
        expect.assertions(2);
        try {
            const input: IPurchaseInputDTO = {} as any;
            
            await showBusiness.purchase(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Empty field(s)");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Show_id different from string", async () => {
        expect.assertions(2);
        try {
            const input: IPurchaseInputDTO = {
                show_id: 8,
                token: "token-admin-mock"
            } as any;
            
            await showBusiness.purchase(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid show_id");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Invalid token", async () => {
        expect.assertions(2);
        try {
            const input: IPurchaseInputDTO = {
                show_id: "001",
                token: "invalid-token"
            }

            await showBusiness.purchase(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid token");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Invalid token", async () => {
        expect.assertions(2);
        try {
            const input: IPurchaseInputDTO = {
                show_id: "Id that does not exist",
                token: "token-normal-mock"
            }

            await showBusiness.purchase(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Show id does not exist");
                expect(error.statusCode).toBe(404);
            }
        }
    })

    test("Limit of tickets bought by one person", async () => {
        expect.assertions(2);
        try {
            const input: IPurchaseInputDTO = {
                show_id: "001",
                token: "token-normal-mock"
            }

            await showBusiness.purchase(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("A user can only buy one ticket");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Tickets sold out", async () => {
        expect.assertions(2);
        try {
            const input: IPurchaseInputDTO = {
                show_id: "002",
                token: "token-normal-mock"
            }

            await showBusiness.purchase(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Tickets sold out");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    // Delete Ticket
    test("Sell ticket", async () => {
        const input: IDeleteTicketInputDTO = {
            id: "01",
            token: "token-admin-mock"
        }

        const response = await showBusiness.deleteTicket(input);
        expect(response).toBe("Ticket sold");
    })

    test("Empty fields", async () => {
        expect.assertions(2);
        try {
            const input: IDeleteTicketInputDTO = {} as any;
            
            await showBusiness.deleteTicket(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Empty field(s)");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Invalid token", async () => {
        expect.assertions(2);
        try {
            const input: IDeleteTicketInputDTO = {
                id: "01",
                token: "invalid-token"
            }

            await showBusiness.deleteTicket(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid token");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Invalid ticket", async () => {
        expect.assertions(2);
        try {
            const input: IDeleteTicketInputDTO = {
                id: "02",
                token: "token-normal-mock"
            }

            await showBusiness.deleteTicket(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("Invalid ticket");
                expect(error.statusCode).toBe(400);
            }
        }
    })

    test("Can only sell own tickets", async () => {
        expect.assertions(2);
        try {
            const input: IDeleteTicketInputDTO = {
                id: "01",
                token: "token-normal-mock"
            }

            await showBusiness.deleteTicket(input);
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toBe("You can only sell your own tickets");
                expect(error.statusCode).toBe(400);
            }
        }
    })
})