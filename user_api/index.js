import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // insert data 
    // create single user
    // const user = await prisma.user.create({
    //     data:{
    //         name: "maryam",
    //         email: "maryamsheikh117@gmail.com"
    //     },
    // });
    // console.log(user);

    // multiple users
    // const newUsers = await prisma.user.createMany({
    //     data:[
    //     { email: "samreen12@gmail.com", name: "samreen"},
    //     { email: "noreen12@gmail.com", name: "noreen"},
    //     { email: "salman12@gmail.com", name: "salman"}
    // ]
    // })
    // console.log(newUsers)

    // read all data
    //     const showUsers = await prisma.user.findMany();
    //     console.log(showUsers);
    // };

    // finduser
    //     const showUser = await prisma.user.findUnique({
    //         where : {id:2}
    //     });
    //     console.log(showUser);
    // };

// updateuser
//     const updateUser = await prisma.user.update({
//         where : {id:2},
//         data: {name:"raheela"}
//     });
//     console.log(updateUser);
// };

// delete user
//     const deleteUser = await prisma.user.delete({
//         where : {id:2},
//     });
//     console.log(deleteUser);
// };

// delete many 
    const deleteUser = await prisma.user.deleteMany({
        where : {
            id:{
                in:[2, 4]}
            }
    });
    console.log(deleteUser);
};

main()
    .catch((e)=> console.error(e))
    .finally(async () =>{
        await prisma.$disconnect();
    })