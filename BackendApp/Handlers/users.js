const { user } = require("../Database/users");
const setuser = async (req, res) => {
    const username = req.params.username;
    const User = await user.findOne({ login: username });

    if (User) {
        res.status(200).send(User);
    }
    else {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then(async (res) => {
                // console.log(res);
                try {
                    await user.create({
                        login: res.login,
                        id: res.id,
                        node_id: res.node_id,
                        avatar_url: res.avatar_url,
                        gravatar_id: res.gravatar_id,
                        url:res.url,
                        html_url:res.html_url,
                        followers_url: res.followers_url,
                        following_url: res.following_url,
                        gists_url: res.gists_url,
                        starred_url: res.starred_url,
                        subscriptions_url: res.subscriptions_url,
                        organizations_url: res.organizations_url,
                        repos_url: res.repos_url,
                        events_url: res.events_url,
                        received_events_url: res.received_events_url,
                        type: res.type,
                        site_admin: res.site_admin,
                        name: res.name,
                        blog: res.blog,
                        location: res.location,
                        email:res.email,
                        hireable: res.hireable,
                        bio: res.bio,
                        twitter_username: res.twitter_username,
                        public_repos: res.public_repos,
                        public_gists: res.public_gists,
                        followers: res.followers,
                        following: res.following,
                        created_at: res.created_at,
                        updated_at: res.updated_at
                    })
                    return res.status(200).send(res);
                }
                catch (err) {
                    return res.status(500).send("Internal server error");
                }
            })

    }

}

const mutual = async(req,res)=>{
    return res.status(200).send("hello world");
}