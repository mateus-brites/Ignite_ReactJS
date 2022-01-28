import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository = {
    name: 'Form in React',
    link: 'https://github.com/mateus-brites'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository="unform1" description={repository}/>
                <RepositoryItem repository="unform2" description={repository}/>
                <RepositoryItem repository="unform3" description={repository}/>
                <RepositoryItem repository="unform4" description={repository}/>
                <RepositoryItem repository="unform5" description={repository}/>
            </ul>
        </section>
    )
}