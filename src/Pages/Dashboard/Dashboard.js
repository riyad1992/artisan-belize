import React from 'react';
import {Switch, Route, Link, useRouteMatch} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import AddReview from './AddReview/AddReview';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import ManageProduct from './ManageProduct/ManageProduct';
import Myorders from './Myorders/Myorders';
import Payment from './Payment/Payment';

const Dashboard = () => {
    const {admin, logout} = useAuth()
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2 className='w-100 bg-primary text-white p-3'>Dashboard</h2>
            <div className='row container'>
                <div style={{borderRight: '1px solid gray'}} className='col-12 col-md-3 text-start'>
                    <Link to='/home'><h6>Back to Home</h6></Link>
                    <Link to={`${url}`}><h6 color="inherit">Dashboard</h6></Link>
                    <Link to={`${url}/pay`}><h6 color="inherit">Start A Payment</h6></Link>
                    <Link to={`${url}/myorders`}><h6 color="inherit">My Orders</h6></Link>
                    <Link to={`${url}/addreview`}><h6 color="inherit">Add a Review</h6></Link>
                    {
                        admin && <div>
                            <Link to={`${url}/makeadmin`}><h6 color="inherit">Make A Admin</h6></Link>
                            <Link to={`${url}/manageallorders`}><h6 color="inherit">Manage All Orders</h6></Link>
                            <Link to={`${url}/addProduct`}><h6 color="inherit">Add A Product</h6></Link>
                            <Link to={`${url}/manageaProduct`}><h6 color="inherit">Manage Products</h6></Link>
                        </div>
                    }
                    <button onClick={logout}>Log Out</button>
                </div>
                <div className='col-12 col-md-9'>
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <Myorders></Myorders>
                        </Route>
                        <Route path={`${path}/addreview`}>
                            <AddReview></AddReview>
                        </Route>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageallorders`}>
                            <ManageAllOrder></ManageAllOrder>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageaProduct`}>
                            <ManageProduct></ManageProduct>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;