import React, { FC,useState, useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";
import UserList from "../components/UserList/UserList";
import { getUserData } from "../misc/configData";
import ReactPaginate from "react-paginate";
import "./UserComponentWrapper.css";

 export type UserDatatype = {
  id:number,
  avatar:string,
  first_name:string,
  last_name:string,
  email:string,

 }[]
const UserComponentWrapper:FC = () => {
  const [userData, setUserData] = useState<UserDatatype>([]);
  const [pageNum, setPageNum] = useState<number>(1);
  useEffect(() => {
    getUserData(pageNum).then((result) => {
      setUserData(result.data);
    });
  }, [pageNum]);

  const handlePageClick = (event: { selected: number }) => {
    setPageNum(event.selected + 1);
  };

  return (
    <div className="Wrapper bg-white">
      <UserList userData={userData} />
      <div className="d-flex justify-content-center">
        <ReactPaginate
          previousLabel={<>&laquo;</>}
          nextLabel={<>&raquo;</>}
          pageCount={2}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>

      <UserCard />
    </div>
  );
};

export default UserComponentWrapper;
