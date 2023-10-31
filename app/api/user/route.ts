import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { User } from "@prisma/client";
// import { EmployeeRepository } from '@/app/_repositories/Employee';
import { prisma } from "@/app/_utils/prismaSingleton";
import { PrismaClient } from "@prisma/client";

//Find all
// export async function GET(request: NextRequest) {
//   try {
//     // get all data from database via model
//     const getUsers = await prisma.user.findMany();
//     console.log("Find Employee", getUsers);
//     if (getUsers.length > 0) {
//       // logger.info("Call All Employee Success-GET All!")
//       return NextResponse.json(getUsers);
//     } else {
//       return NextResponse.json({ message: "No record found" }, { status: 404 });
//     }
//   } catch (e) {
//     console.log("Error", e);
//     return NextResponse.json({ message: "error" }, { status: 500 });
//   }
// }

//Find all with relation
// export async function GET(request: NextRequest) {
//     try{
//         // get all data from database via model
//         // const getUsers = await prisma.user.findMany();
//         const getUsers = await prisma.user.findMany({
//             include:{
//               orders:{
//                 include:{
//                   product:{
//                   }
//                 }
//               }
//             }
//           });
//         console.log("Find Employee",getUsers)
//         if(getUsers.length>0){
//             // logger.info("Call All Employee Success-GET All!")
//             return NextResponse.json(getUsers)
//         }else{
//             return NextResponse.json({message:"No record found"},{status:404})
//         }
//     }catch(e){
//         console.log("Error",e)
//         return NextResponse.json({message:"error"},{status:500})
//     }
// }

//Select fields
// export async function GET(request: NextRequest) {
//     try{
//         // get all data from database via model
//         const getUsers = await prisma.user.findMany({
//             select: {
//                 name: true,
//                 email: true
//             }
//         });
//         console.log("Find Employee",getUsers)
//         if(getUsers.length>0){
//             // logger.info("Call All Employee Success-GET All!")
//             return NextResponse.json(getUsers)
//         }else{
//             return NextResponse.json({message:"No record found"},{status:404})
//         }
//     }catch(e){
//         console.log("Error",e)
//         return NextResponse.json({message:"error"},{status:500})
//     }
// }

//Find all by date
// export async function GET(request: NextRequest) {
//     try{
//         // get all data from database via model
//         const getUsers = await prisma.user.findMany({

//             //less than
//             // where: {
//             //     createdAt: { lte: new Date('2023-09-08') },
//             //   },

//             //greater than
//             // where: {
//             //     createdAt: { gt: new Date('2023-09-06') },
//             //   }

//               where: {
//                 createdAt: {
//                     gte: new Date('2023-09-01') ,
//                     lte: new Date('2023-09-30') ,
//                 },
//               }

//           });
//         console.log("Find Employee",getUsers)
//         if(getUsers.length>0){
//             // logger.info("Call All Employee Success-GET All!")
//             return NextResponse.json(getUsers)
//         }else{
//             return NextResponse.json({message:"No record found"},{status:404})
//         }
//     }catch(e){
//         console.log("Error",e)
//         return NextResponse.json({message:"error"},{status:500})
//     }
// }

//Task 2 user, order, products
// export async function GET(request: NextRequest) {
//     try{
//         const result = await prisma.order.findMany({
//             select:{
//               id:true,
//               user:{
//                 select:{
//                   id:true,
//                   name:true
//                 }
//               },
//               product:{
//                 select:{
//                   id:true,
//                   name:true
//                 }
//               }
//             }
//           });
//       console.log("User Product Order Count",result.length);
//       if(result.length>0){
//           // logger.info("Call All Employee Success-GET All!")
//           return NextResponse.json(result)
//       }else{
//           return NextResponse.json({message:"No record found"},{status:404})
//       }
//     }catch(e){
//         console.log("Error",e)
//         return NextResponse.json({message:"error"},{status:500})
//     }
// }

//Task1 Select users who never submit orders
// export async function GET(request: NextRequest) {
//     try{
//         // get all data from database via model
//         const getUsers = await prisma.user.findMany({

//           select:{
//             name :true,
//             orders:{
//               where :{
//                 id : ""
//               },
//               select : {
//                 id:true,
//                 // product:{
//                 //   select:{
//                 //     id:true,
//                 //     name :true
//                 //   }
//                 // }
//               }
//             }
//           },

//         });

//         console.log("Find Employee",getUsers)
//         if(getUsers.length>0){
//             // logger.info("Call All Employee Success-GET All!")
//             return NextResponse.json(getUsers)
//         }else{
//             return NextResponse.json({message:"No record found"},{status:404})
//         }
//     }catch(e){
//         console.log("Error",e)
//         return NextResponse.json({message:"error"},{status:500})
//     }
// }

//Task 1 by Ko Tun
// export async function GET(request: NextRequest) {
//   try {
//     // get all data from database via model
//     const getUsers = await prisma.user.findMany({
//       select: {
//         id: true,
//         name: true,
//       },
//       where: {
//         NOT: {
//           orders: {
//             some: {
//               // Your condition forhere (in this case, we want product with no orders)
//             },
//           },
//         },
//       },
//     });
//     console.log("Find Employee", getUsers);
//     if (getUsers.length > 0) {
//       // logger.info("Call All Employee Success-GET All!")
//       return NextResponse.json(getUsers);
//     } else {
//       return NextResponse.json({ message: "No record found" }, { status: 404 });
//     }
//   } catch (e) {
//     console.log("Error", e);
//     return NextResponse.json({ message: "error" }, { status: 500 });
//   }
// }

//Count test
// export async function GET(request: NextRequest) {
//     try{
//         // get all data from database via model
//         const getUsers = await prisma.user.findMany(
//           {
//             include: {
//               _count: {
//                 select: { orders: true },
//               },
//             },
//           }
//         );
//         console.log("Find Employee",getUsers)
//         if(getUsers.length>0){
//             // logger.info("Call All Employee Success-GET All!")
//             return NextResponse.json(getUsers)
//         }else{
//             return NextResponse.json({message:"No record found"},{status:404})
//         }
//     }catch(e){
//         console.log("Error",e)
//         return NextResponse.json({message:"error"},{status:500})
//     }
// }

// //Two times payment for customers with total order amount greater than 5000
// export async function GET(request: NextRequest) {
//   try {
//     // get all data from database via model
//     const getUsers = await prisma.user.findMany({
//       select:{
//         name:true,
//         orders:{
//           select:{
//             qty:true,
//             current_price:true
//           }
//         }
//       },
//       orderBy:{
//         id:"asc"
//       }
//     });

//     // const getUsers = await prisma.user.findMany({
//     //   include:{
//     //     _count:{
//     //       select:{
//     //         orders:true
//     //       }
//     //     }
//     //   }
//     // });

//     console.log("Find Employee", getUsers);
//     if (getUsers.length > 0) {
//       // logger.info("Call All Employee Success-GET All!")
//       return NextResponse.json(getUsers);
//     } else {
//       return NextResponse.json({ message: "No record found" }, { status: 404 });
//     }
//   } catch (e) {
//     console.log("Error", e);
//     return NextResponse.json({ message: "error" }, { status: 500 });
//   }
// }

//Compute Field for user
// export async function GET(request: NextRequest) {
//   try {
//     /// Compute Field
//     const prisma = new PrismaClient().$extends({
//       result: {
//         user: {
//           // Add a computed field called `nameAndAge` to the user
//           nameAndRole: {
//             needs: {
//               name: true,
//               role: true,
//             },
//             compute(user) {
//               return `${user.name} (${user.role})`;
//             },
//           },
//         },
//       },
//     });

//     const user = await prisma.user.findFirst();

//     //     console.log("Find Employee", getUsers);
//     if (user) {
//       // logger.info("Call All Employee Success-GET All!")
//       return NextResponse.json(user);
//     } else {
//       return NextResponse.json({ message: "No record found" }, { status: 404 });
//     }
//   } catch (e) {
//     console.log("Error", e);
//     return NextResponse.json({ message: "error" }, { status: 500 });
//   }
// }

//Compute Methond for user
// export async function GET(request: NextRequest) {
//   try {
//     /// Compute Method
//     const prisma = new PrismaClient().$extends({
//       model: {
//         user: {
//           // Create a custom method on `user`
//           async findManyByCustomerMethod(customParam:string) {
//             return prisma.user.findMany({
//               where: { email: { endsWith: `@${customParam}` } },
//             });
//           },
//         },
//       },
//     });

//     const users = await prisma.user.findManyByCustomerMethod("gmail.com");

//     //     console.log("Find Employee", getUsers);
//     if (users) {
//       // logger.info("Call All Employee Success-GET All!")
//       return NextResponse.json(users);
//     } else {
//       return NextResponse.json({ message: "No record found" }, { status: 404 });
//     }
//   } catch (e) {
//     console.log("Error", e);
//     return NextResponse.json({ message: "error" }, { status: 500 });
//   }
// }

//Mix Compute Field and Method for user
export async function GET(request: NextRequest) {
  try {
    // Compute Field
    const prisma = new PrismaClient().$extends({
      result: {
        order: {
          // Add a computed field called `total` to the order
          total: {
            needs: {
              qty: true,
              current_price: true,
            },
            compute(order) {
              return order.current_price * order.qty;
            },
          },
        },
      },
      model: {
        user: {
          // Create custom method for pyament calculation
          async getCustomerPayments(installment_price: number) {
            const users = prisma.user.findMany({
              select: {
                name: true,
                orders: {
                  select: {
                    total: true,
                  },
                },
              },
            });

            interface Payment {
              name: string;
              grand_total: number;
              payment_one: number;
              payment_two: number;
            }

            const userPayments: Payment[] = [];

            (await users).map((user) => {
              let grand_total = 0;
              let payment_one = 0;
              let payment_two = 0;

              user.orders.map((order) => {
                let total = order.total;
                grand_total += total;
              });

              if (grand_total > installment_price) {
                payment_one = installment_price;
                payment_two = grand_total - installment_price;
              }
              userPayments.push({
                name: user.name,
                grand_total: grand_total,
                payment_one: payment_one,
                payment_two: payment_two,
              });
            });

            return userPayments;
          },
        },
      },
    });

    const customerPayments = await prisma.user.getCustomerPayments(5000);

    //     console.log("Find Employee", getUsers);
    if (customerPayments) {
      // logger.info("Call All Employee Success-GET All!")
      return NextResponse.json(customerPayments);
    } else {
      return NextResponse.json({ message: "No record found" }, { status: 404 });
    }
  } catch (e) {
    console.log("Error", e);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // get data from body
    const user: User = await request.json();
    console.log("body>>", user);
    // insert data to database via model
    const createdUser = await prisma.user.create({
      data: {
        ...user,
      },
    });
    // console.log("Created Employee",createdEmployee);
    // logger.info(`Employee ${createdEmployee.id} has been created successfully!.`);
    return NextResponse.json(
      { ...createdUser, id: createdUser.id.toString() },
      { status: 201 }
    );
  } catch (e) {
    console.log("Employee Post Error", e);
    // logger.error(`Employee Already exist error!.`);
    // return  new Response(JSON.stringify({message:"error"}),{status:500})
    return NextResponse.json({ message: "Resource Existed" }, { status: 400 });
  }
}
