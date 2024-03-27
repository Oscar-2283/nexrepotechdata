'use client'
import { useState, useEffect } from 'react';
import { usersMixOrders } from '@/utils/usersMixOrders.js'

interface UserOrder {
  userId: string;
  name: string;
  age: number;
  orders: {
    orderId: string;
    product: string;
    price: number;
  }[];
}

export default function UserMixOrder() {

  const [usersOrders, setUsersOrders] = useState([] as UserOrder[])

  const users = [
    { userId: 'u01', name: 'Alice', age: 25 },
    { userId: 'u02', name: 'Bob', age: 33 },
    { userId: 'u03', name: 'Charlie', age: 22 }
  ];


  const orders = [
    { orderId: 'o01', userId: 'u01', product: 'Laptop', price: 1200 },
    { orderId: 'o02', userId: 'u02', product: 'Smartphone', price: 800 },
    { orderId: 'o03', userId: 'u03', product: 'Camera', price: 1000 },
    { orderId: 'o04', userId: 'u03', product: 'Tablet', price: 1300 }
  ];

  useEffect(() => {
    setUsersOrders(usersMixOrders(users, orders));
  }, []); 


  return (
    <div className='mx-auto mt-20 p-10 bg-slate-800 flex gap-5'>
      {usersOrders.length > 0 &&
        usersOrders.map((user) => (
          <div key={user.userId}>
            <h2>{user.name}&apos;s Orders</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black' }}>Order ID</th>
                  <th style={{ border: '1px solid black' }}>Product</th>
                  <th style={{ border: '1px solid black' }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {user.orders.map((order) => (
                  <tr key={order.orderId}>
                    <td style={{ border: '1px solid black' }}>{order.orderId}</td>
                    <td style={{ border: '1px solid black' }}>{order.product}</td>
                    <td style={{ border: '1px solid black' }}>${order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      }
    </div>
  );
}