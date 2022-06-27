import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker'
interface User {
    name: string;
    email: string;
    created_at: string;
}

// Cria um servidor fake para simular o backend
export function makeServer() {
    const server = createServer({
        models: { // Dados que queremos armazenar dentro do nosso banco de dados fictício
            user: Model.extend<Partial<User>>({})
        },

        factories: { // para criar vários dados de uma única vez
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },

                email() {
                    return faker.internet.email().toLocaleLowerCase()
                },
                created_at() {
                    return faker.date.recent(10) // cria uma data com no máximo 10 dias para trás
                }
            })
        },

        seeds(server) { //Cria alguns dados fictícios assim que o servidor é inicializado
            server.createList('user', 20) // cria 200 usuários
        },

        routes() {
            this.namespace = 'api' //Todas as rotas devem começar com api para serem chamadas. ex: http://localhost:3000/api/users
            this.timing = 750 // adiciona um delay de 750 ms nas chamadas da api para simular a experiência do usuário
            this.get('/users');
            this.post('/users');

            this.namespace = '' // Reseta o namespace assim que terminamos de criar as rotas
            this.passthrough(); // faz com que todas as chamadas na rota api passem primeiro pelo mirage e caso não encontre, procure na rota original delas
        }
    })
}