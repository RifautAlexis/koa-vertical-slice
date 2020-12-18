import { GetAllArticleRequest } from "../../requests/article/getAllArticleRequest";
import { GetArticleByIdRequest } from "../../requests/article/getArticleByIdRequest";
import { ArticleResponse } from "../../responses/article/articleResponse";
import { ArticlesResponse } from "../../responses/article/articlesResponse";
import { AsyncHandler } from "../handler";
import container from "../handlerContainer";

export class GetArticleByIdHandler implements AsyncHandler<GetArticleByIdRequest, ArticleResponse> {

    async Handle(request: GetArticleByIdRequest): Promise<ArticleResponse> {
        return {data: "Coucou"};
    }   
}
