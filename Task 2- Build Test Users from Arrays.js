function UserData(names, roles) {
    const users =[];

    for(let i=0;i<names.length;i++){
        const username=names[i].toLowerCase().replaceAll(" ", "_");
        const email=`${username}+"@playwrightbatch.com"`;

        users.push({
            username:username,
            email:email,
            role:roles[i],

        });
    }
        return users;
}



names = ["Amit Kumar", "Neha Singh"]
roles = ["admin", "viewer"]

console.log(UserData(names, roles));

