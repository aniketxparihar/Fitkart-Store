import React from 'react'
import { Link } from 'react-router-dom';
import notFound from "./notFound.png"
const NotFound = () => {
    return (
      <div className="not-found">
        <img src={notFound} alt="" />
        <Link to="/Product" className="button m-8 p-4  txt-2xl txt-bold bg-violet-400 rounded-m">
         Go Back
        </Link>
      </div>
    );
}

export default NotFound