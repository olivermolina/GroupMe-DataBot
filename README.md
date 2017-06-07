# GroupMe-DataBot Backend API

## Getting started

```sh
git clone https://github.com/flyblackbox/GroupMe-DataBot.git
cd GroupMe-DataBot
npm install
npm run start
```

Then open [http://localhost:3000/graphql](http://localhost:3000/graphql)

When you paste this on the left side of the page:

```
{
  group(token: "99gxyd30En1qnevPHiAFUGDqoooKRiuEWttxBSBP") {
    id
    group_id
    name
    members {
      id
      user_id
      nickname
    }
  }
}

```

and hit the play button (cmd-return), then you should get this on the right side:

```json
{
  "data": {
    "group": {
      "id": 31609069,
      "group_id": 31609069,
      "name": "Startup",
      "members": [
        {
          "id": 247127136,
          "user_id": 49200067,
          "nickname": "Oliver Molina"
        }
      ]
    }
  }
}
```  
