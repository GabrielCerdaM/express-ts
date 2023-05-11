import { sequelize } from "../config/sequelize";
import ServiceSequelize from "../sequelize/serviceSequelize";

export const getAllServices = (): Promise<ServiceSequelize[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const services = await ServiceSequelize.findAll();
      // if (services) {
      //   reject(null);
      // }
      resolve(services);
    } catch (error) {
      reject(JSON.stringify(error));
    }
  });
};

// export const getAllServices2 = (): Promise<any[]> => {
//   return new Promise((resolve, reject) => {
//     return pool.query(
//       `
//       SELECT *
//       FROM services
//       INNER JOIN users ON services.userId = users.id
//     `,
//       (error, results) => {
//         if (error) {
//           return reject(error);
//         }
//         return resolve(results);
//       }
//     );
//   });
// };
