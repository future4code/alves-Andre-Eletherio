import { PostBusiness } from "../src/business/PostBusiness";
import { ICreatePostInputDTO, IGetPostsInputDTO, Post } from "../src/models/Post";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { PostDatabaseMock } from "./mocks/PostDatabaseMock";

describe("Testing PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock,
        new IdGeneratorMock,
        new AuthenticatorMock
    );

    test("Return message and post when post is created", async () => {
        const input: ICreatePostInputDTO = {
            content: "Post test",
            token: "token-mock-normal"
        }

        const response = await postBusiness.createPost(input);

        expect(response.message).toBe("Post criado com sucesso");
        expect(response.post).toBeInstanceOf(Post);
    })

    test("Return posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }
        const response = await postBusiness.getPosts(input);
        expect(response.posts.length).toBe(2);
        expect(response.posts[0]).toBeInstanceOf(Post);
    })
})