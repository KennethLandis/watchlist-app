export const findClientByName = (clients, client_name) =>
    // eslint-disable-next-line
    clients.find(client => client.client_name == client_name)