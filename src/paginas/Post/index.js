import "./Post.css"

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown"
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/paginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post () {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0,4)

    return (
        <Routes>
            <Route path="*" element ={<PaginaPadrao/>}>
                <Route index element={
                    
                    <PostModelo 
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                > 
                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>
            

                </PostModelo>}/>
            </Route>
        </Routes>
    )
}