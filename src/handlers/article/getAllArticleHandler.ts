import { GetAllArticleRequest } from "../../requests/article/getAllArticleRequest";
import { ArticlesResponse } from "../../responses/article/articlesResponse";
import { AsyncHandler } from "../handler";
import container from "../handlerContainer";

export class GetAllArticleHandler implements AsyncHandler<GetAllArticleRequest, ArticlesResponse> {

    async Handle(request: GetAllArticleRequest): Promise<ArticlesResponse> {
        return {data: ["Coucou", "toi"]};
    }   
}
