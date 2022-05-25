import { query as q } from 'faunadb'

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from '../../../services/fauna'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
          params: {
              scope: 'read:user' // possibilita ver as informações basicas do usuário como email e username
          }
      }
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({user, account, profile}): Promise<boolean> {

      const { email } = user
      console.log(user)

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'), // esse indice foi criado dentro do fauna
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'), // Nome da tabela que queremos inserir
              {
                data: { email: email }
              }
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )
  
        return true
      } catch {
        return false
      }
    }
  },
})