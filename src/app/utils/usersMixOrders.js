export function usersMixOrders(users, orders) {
  return users.map((user) => {
    const userOrders = orders.filter((order) => order.userId === user.userId);
    return {
      ...user,
      orders: userOrders,
    };
  });
}