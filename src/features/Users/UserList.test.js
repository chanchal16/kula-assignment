import { cleanup, customRender,screen } from "../../utils/test-utils"
import { UserList } from "./UserList";

const dummyUsers = [
    {
        "login": "amitshekhariitbhu",
        "id": 9877145,
        "node_id": "MDQ6VXNlcjk4NzcxNDU=",
        "avatar_url": "https://avatars.githubusercontent.com/u/9877145?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/amitshekhariitbhu",
        "html_url": "https://github.com/amitshekhariitbhu",
        "followers_url": "https://api.github.com/users/amitshekhariitbhu/followers",
        "following_url": "https://api.github.com/users/amitshekhariitbhu/following{/other_user}",
        "gists_url": "https://api.github.com/users/amitshekhariitbhu/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/amitshekhariitbhu/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/amitshekhariitbhu/subscriptions",
        "organizations_url": "https://api.github.com/users/amitshekhariitbhu/orgs",
        "repos_url": "https://api.github.com/users/amitshekhariitbhu/repos",
        "events_url": "https://api.github.com/users/amitshekhariitbhu/events{/privacy}",
        "received_events_url": "https://api.github.com/users/amitshekhariitbhu/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
    },
    {
        "login": "Anuj-Kumar-Sharma",
        "id": 17507675,
        "node_id": "MDQ6VXNlcjE3NTA3Njc1",
        "avatar_url": "https://avatars.githubusercontent.com/u/17507675?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Anuj-Kumar-Sharma",
        "html_url": "https://github.com/Anuj-Kumar-Sharma",
        "followers_url": "https://api.github.com/users/Anuj-Kumar-Sharma/followers",
        "following_url": "https://api.github.com/users/Anuj-Kumar-Sharma/following{/other_user}",
        "gists_url": "https://api.github.com/users/Anuj-Kumar-Sharma/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Anuj-Kumar-Sharma/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Anuj-Kumar-Sharma/subscriptions",
        "organizations_url": "https://api.github.com/users/Anuj-Kumar-Sharma/orgs",
        "repos_url": "https://api.github.com/users/Anuj-Kumar-Sharma/repos",
        "events_url": "https://api.github.com/users/Anuj-Kumar-Sharma/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Anuj-Kumar-Sharma/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
    },
    {
        "login": "loveBabbar",
        "id": 29489915,
        "node_id": "MDQ6VXNlcjI5NDg5OTE1",
        "avatar_url": "https://avatars.githubusercontent.com/u/29489915?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/loveBabbar",
        "html_url": "https://github.com/loveBabbar",
        "followers_url": "https://api.github.com/users/loveBabbar/followers",
        "following_url": "https://api.github.com/users/loveBabbar/following{/other_user}",
        "gists_url": "https://api.github.com/users/loveBabbar/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/loveBabbar/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/loveBabbar/subscriptions",
        "organizations_url": "https://api.github.com/users/loveBabbar/orgs",
        "repos_url": "https://api.github.com/users/loveBabbar/repos",
        "events_url": "https://api.github.com/users/loveBabbar/events{/privacy}",
        "received_events_url": "https://api.github.com/users/loveBabbar/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
    },
   
];

afterEach(cleanup)
describe('render UserList component',()=>{
    it('should show spinner if status is loading',()=>{
        
        const {getByTestId} = customRender(<UserList/>, {preloadedState:{users:{status:'loading'}}})
        expect(getByTestId('spinner-container')).toBeInTheDocument()
    })

    it('should show error message if error occurs',()=>{
        const {getByTestId} = customRender(<UserList/>, {preloadedState:{users:{status:'rejected'}}})
        const message = screen.getByText(/Oops. An error occured!/i)
        expect(getByTestId('err-container')).toBeInTheDocument();
        expect(message).toBeInTheDocument()
    })

    it('should show user list when data fetched',()=>{
        const{getByTestId} = customRender(<UserList/>,{preloadedState:{users:{status:'fulfilled',userList:dummyUsers}}})
        expect(getByTestId('amitshekhariitbhu-card')).toBeInTheDocument()
    })
})