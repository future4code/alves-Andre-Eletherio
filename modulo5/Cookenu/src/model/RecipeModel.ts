export class RecipeModel {
    private title: string;
    private description: string;
    private preparation_mode: string;
    private userId: string;
    private datetime?: Date;
    constructor(title: string, description: string, preparation_mode: string, userId: string, datetime: Date){
        this.title = title;
        this.description = description;
        this.preparation_mode = preparation_mode;
        this.userId = userId;
        this.datetime = datetime;
    }

    static toRecipeModel(data: any): RecipeModel {
        return new RecipeModel(data.title, data.description, data.preparation_mode, data.user_id, data.datetime);
    }

    public getTitle = (): string => {
        return this.title;
    }

    public getDescription = (): string => {
        return this.description;
    }

    public getPrepMode = (): string => {
        return this.preparation_mode;
    }

    public getUserId = (): string => {
        return this.userId;
    }
}