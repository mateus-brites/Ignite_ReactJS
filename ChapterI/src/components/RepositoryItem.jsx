export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository}</strong>
            <p>{props.description.name}</p>

            <a href={props.description.link}>
                Acessar repositórios
            </a>
        </li>
    )
}