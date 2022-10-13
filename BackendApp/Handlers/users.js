const { user } = require("../Database/users");
const setUser = async (req, res) => {
    const username = req.params.username;
    const User = await user.findOne({ login: username });

    if (!User) {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then(async (res) => {
              
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
                        
                    })
                    return res.status(200).send(res);
               
            })

    }
    else {
        res.status(200).send(User);
    }

}

module.exports=setUser
