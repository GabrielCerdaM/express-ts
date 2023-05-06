export const getAllServices = (): Promise<Service[]> => {
  return new Promise((resolve, reject) => {
    return pool.query("SELECT * FROM services", (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
};

export const getAllServices2 = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    return pool.query(
      `
      SELECT *
      FROM services
      INNER JOIN users ON services.userId = users.id
    `,
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
};
