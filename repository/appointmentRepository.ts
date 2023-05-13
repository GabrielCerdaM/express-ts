import ContractSequelize from "../sequelize/contractSequelize";

export const appointment = async (
  serviceId: number,
  userId: number,
  price: number,
  name: string
) => {
  const newContract = await ContractSequelize.create({
    serviceId,
    clientId: userId,
    price,
    name,
  });
  return newContract ?? null;
};
