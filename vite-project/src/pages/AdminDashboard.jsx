// src/pages/AdminDashboard.jsx
import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Orders</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows with order details will go here */}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/orders');
//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const removeOrder = async (orderId) => {
//     try {
//       await fetch(`http://localhost:5000/orders/${orderId}`, {
//         method: 'DELETE',
//       });
//       setOrders(orders.filter(order => order.id !== orderId));
//     } catch (error) {
//       console.error('Error removing order:', error);
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Orders</th>
//             <th>Total Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, index) => (
//             <tr key={index}>
//               <td>{order.id}</td>
//               <td>{order.name}</td>
//               <td>{order.phone}</td>
//               <td>
//                 <ul>
//                   {order.cart.map((item, idx) => (
//                     <li key={idx}>{item.name} - {item.price}</li>
//                   ))}
//                 </ul>
//               </td>
//               <td>{order.totalPrice}</td>
//               <td>
//                 <button onClick={() => removeOrder(order.id)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;





