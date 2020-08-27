//functional component
import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <Link to="/client/add" className="btn btn-success btn-block">
        <i className="fas fas-plus"></i> New
      </Link>
    </div>
  );
}
