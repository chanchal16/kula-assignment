import { cleanup, customRender,screen } from "../utils/test-utils"
import { UserCard } from "./UserCard";

afterEach(cleanup)

describe("user card",()=>{
    it('should render a user card',()=>{
        const userObj = {
            avatar_url: "https://avatars.githubusercontent.com/u/69760792?v=4",
            followers_url: "https://api.github.com/users/AnkitaBagale/followers",
            following_url: "https://api.github.com/users/AnkitaBagale/following{/other_user}",
            gists_url: "https://api.github.com/users/AnkitaBagale/gists{/gist_id}",
            html_url: "https://github.com/AnkitaBagale",
            id: 69760792,
            login: "AnkitaBagale",
            repos_url: "https://api.github.com/users/AnkitaBagale/repos"
        }
        customRender(<UserCard user={userObj}/>)
        const name = screen.getByTestId('username')       
        const card = screen.getByTestId('AnkitaBagale-card')       
              
        expect(card).toBeInTheDocument();
        expect(card).toContainElement(name)
        expect(name).toHaveTextContent(/^AnkitaBagale$/)
    })
})